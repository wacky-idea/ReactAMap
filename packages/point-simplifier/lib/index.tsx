import '@wacky-idea/react-amap-types'

import { useMapContext } from "@wacky-idea/react-amap-map"
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'

export interface PointSimplifierProps<T = {}> {
  data?: T & AMapUI.PointDataItem[]
  /** 此参数为构造参数不支持修改 */
  option?: AMapUI.PointSimplifierConfig
  pointClick?: (type: AMapUI.PointSimplifierEvent, record: { data: T & AMapUI.PointDataItem; index: number }) => void
  pointMouseout?: (type: AMapUI.PointSimplifierEvent, record: { data: T & AMapUI.PointDataItem; index: number }) => void
  pointMouseover?: (type: AMapUI.PointSimplifierEvent, record: { data: T & AMapUI.PointDataItem; index: number }) => void
  pointRightClick?: (type: AMapUI.PointSimplifierEvent, record: { data: T & AMapUI.PointDataItem; index: number }) => void
  delay?: number
  show?: boolean
  zIndex?: number
}

/**
 * AMap 海量点
 *
 * option 必须有值才会初始化
 * @param props
 * @returns
 */
// lint-staged 箭头函数泛型通过不了 改用函数
export function PointSimplifier<T = {}>(props: PropsWithChildren<PointSimplifierProps<T>>) {
  const {
    data = [],
    option,
    pointClick = () => { },
    pointMouseout = () => { },
    pointMouseover = () => { },
    pointRightClick = () => { },
    delay = 2000,
    zIndex = 1,
    show = true
  } = props

  const { map } = useMapContext()

  const [pointSimplifier, setPointSimplifier] = useState<AMapUI.PointSimplifier<T>>()

  const [hoverPoint, setHoverPoint] = useState<{ data: T & AMapUI.PointDataItem; index: number }>()

  const mouseout = useCallback((type: AMapUI.PointSimplifierEvent, record: { data: T & AMapUI.PointDataItem; index: number }) => {
    setHoverPoint(undefined)
    pointMouseout(type, record)
  }, [])

  const mouseover = useCallback((type: AMapUI.PointSimplifierEvent, record: { data: T & AMapUI.PointDataItem; index: number }) => {
    setHoverPoint(record)
    pointMouseover(type, record)
  }, [])

  const init = useCallback((map: AMap.Map) => {
    console.log("pointSimplifier init")
    const _pointSimplifier = new AMapUI.PointSimplifier<T>({
      zIndex,
      autoSetFitView: false,
      getPosition(dataItem: T & AMapUI.PointDataItem) {
        return [dataItem.lng, dataItem.lat]
      },
      getHoverTitle(dataItem, dataIndex) {
        // 隐藏自带的 hover title
        return `名称：${dataItem.name}`
      },
      ...option,
      map
    })
    setPointSimplifier(_pointSimplifier)
    _pointSimplifier.renderLater(delay)
    _pointSimplifier.on("pointClick", pointClick)
    _pointSimplifier.on("pointMouseout", mouseout)
    _pointSimplifier.on("pointMouseover", mouseover)
    _pointSimplifier.on("pointRightClick", pointRightClick)
    return _pointSimplifier
  }, [option])

  const mouseup = useCallback((e: MouseEvent) => {
    if (pointSimplifier && hoverPoint && e.button === 2) {
      // 添加右键事件
      pointSimplifier.trigger("pointRightClick", hoverPoint)
      // pointRightClick("pointRightClick", hoverPoint)
    }
  }, [hoverPoint, pointSimplifier])

  useEffect(() => {
    return () => {
      setPointSimplifier(undefined)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("mouseup", mouseup)
    return () => {
      window.removeEventListener("mouseup", mouseup)
    }
  }, [hoverPoint, pointSimplifier])

  useEffect(() => {
    return () => {
      // 海量点不支持销毁
      // pointSimplifier
    }
  }, [pointSimplifier])

  useEffect(() => {
    if (pointSimplifier) {
    } else {
      if (map) {
        if ("AMapUI" in window) {
          setPointSimplifier(init(map))
        } else {
          console.error("缺少 AMapUI 请完善 Loader 组件 AMapUIVersion AMapUIPlugins")
        }
      }
    }
  }, [pointSimplifier, map])

  /**
   * data 赋值
   */
  useEffect(() => {
    if (data.length > 0) {
      pointSimplifier?.setData(data)
    }
  }, [pointSimplifier, data])

  /**
   * 根据 show 调用显示隐藏
   */
  useEffect(() => {
    if (show) {
      pointSimplifier?.show()
    } else {
      pointSimplifier?.hide()
    }
  }, [pointSimplifier, show])

  return <></>
}
