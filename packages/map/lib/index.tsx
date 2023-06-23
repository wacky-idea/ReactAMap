import '@wacky-idea/react-amap-types'
import React, { createContext, CSSProperties, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'

export interface MapProps {
  style?: CSSProperties
  className?: string
}

const MapContext = createContext<AMap.Map | null>(null)

export const useMapContext = () => {
  const map = useContext(MapContext)
  return { map }
}

/**
 * AMap 地图
 * @param props
 * @returns
 */
export const Map = (props: PropsWithChildren<MapProps & AMap.Map.Options>) => {
  const { style = {}, className = "" } = props

  const [map, setMap] = useState<AMap.Map | null>(null)

  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      setMap(new AMap.Map(container.current, { ...props }))
    }

    return () => {
      setMap(null)
    }
  }, [])

  useEffect(() => {
    return () => {
      map?.destroy()
    }
  }, [map])

  return (
    <MapContext.Provider value={map}>
      <div ref={container} style={style} className={className}></div>
      {props.children}
    </MapContext.Provider>
  )
}
