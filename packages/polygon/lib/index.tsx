import { useMapContext } from "@wacky-idea/react-amap-map"
import '@wacky-idea/react-amap-types'
import React, { PropsWithChildren, useEffect, useState } from "react"

export interface PolygonProps {
  show?: boolean
  map?: AMap.Map
}

export const Polygon = (props: PropsWithChildren<PolygonProps & AMap.Polygon>) => {
  const { show = true } = props

  const { map } = useMapContext()

  const [polygon, setPolygon] = useState<AMap.Polygon>()

  useEffect(() => {
    return () => {
      setPolygon(undefined)
    }
  }, [])

  useEffect(() => {
    return () => {
      polygon?.setMap(null)
    }
  }, [polygon])

  useEffect(() => {
    if (polygon) {
      if (map) {
        polygon.setMap(map)
      }
    } else {
      setPolygon(new AMap.Polygon({ ...props }))
    }
  }, [polygon, map])

  useEffect(() => {
    if (show) {
      polygon?.show()
    } else {
      polygon?.hide()
    }
  }, [polygon, show])
  return <></>
}
