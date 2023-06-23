import '@wacky-idea/react-amap-types'

import { usePortal } from "@wacky-idea/react-amap-hook"
import { useMapContext } from "@wacky-idea/react-amap-map"
import React, { PropsWithChildren, useEffect, useState } from 'react'

export interface InfoWindowProps {
  show?: boolean
}

/**
 * AMap 信息窗体
 * @param props
 * @returns
 */
export const InfoWindow = (props: PropsWithChildren<InfoWindowProps & AMap.InfoWindow.Options>) => {
  const { show = true, content = "", children } = props

  const { map } = useMapContext()

  const [infoWindow, setInfoWindow] = useState<AMap.InfoWindow>()

  const { container, Portal } = usePortal()

  useEffect(() => {
    container.classList.add("info-window-container")
    return () => {
      setInfoWindow(undefined)
    }
  }, [])

  useEffect(() => {
    return () => {
      infoWindow?.setMap(null)
    }
  }, [infoWindow])

  useEffect(() => {
    if (infoWindow) {
      if (map) {
        infoWindow.setMap(map)
      }
    } else {
      setInfoWindow(new AMap.InfoWindow({ ...props }))
    }
  }, [infoWindow, map])

  useEffect(() => {
    if (props.position) {
      infoWindow?.setPosition(props.position)
    }
  }, [infoWindow, props.position])

  useEffect(() => {
    infoWindow?.setContent(children ? container : content)
  }, [infoWindow, props.children])

  // show 要放到最后监听
  useEffect(() => {
    if (show) {
      if (map) {
        infoWindow?.open(map)
      }
    } else {
      infoWindow?.hide()
    }
  }, [infoWindow, show, map])

  return <Portal>{children}</Portal>
}
