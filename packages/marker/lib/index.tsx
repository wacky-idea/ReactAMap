import '@wacky-idea/react-amap-types'

import { useMapContext } from "@wacky-idea/react-amap-map"
import React, { PropsWithChildren, useEffect, useState } from 'react'

export interface MarkerProps {
  show?: boolean
}

export const Marker = (props: PropsWithChildren<MarkerProps & AMap.Marker.Options>) => {
  const { show = true } = props

  const { map } = useMapContext()

  const [marker, setMarker] = useState<AMap.Marker>()

  useEffect(() => {
    return () => {
      setMarker(undefined)
    }
  }, [])

  useEffect(() => {
    return () => {
      marker?.setMap(null)
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      if (map) {
        marker.setMap(map)
      }
    } else {
      setMarker(new AMap.Marker({ ...props }))
    }
  }, [marker, map])

  useEffect(() => {
    if (show) {
      marker?.show()
    } else {
      marker?.hide()
    }
  }, [marker, show])

  return <></>
}

