import AMapLoader from "@amap/amap-jsapi-loader"
import React, { PropsWithChildren, useEffect, useState } from "react"

type AMapPluginsType =
  | "AMap.ElasticMarker"
  | "AMap.ToolBar"
  | "AMap.Scale"
  | "AMap.HawkEye"
  | "AMap.MapType"
  | "AMap.Geolocation"
  | "AMap.AdvancedInfoWindow"
  | "AMap.AutoComplete"
  | "AMap.PlaceSearch"
  | "AMap.DistrictSearch"
  | "AMap.LineSearch"
  | "AMap.StationSearch"
  | "AMap.Driving"
  | "AMap.TruckDriving"
  | "AMap.Transfer"
  | "AMap.Walking"
  | "AMap.Riding"
  | "AMap.DragRoute"
  | "AMap.ArrivalRange"
  | "AMap.Geocoder"
  | "AMap.CitySearch"
  | "AMap.IndoorMap"
  | "AMap.MouseTool"
  | "AMap.CircleEditor"
  | "AMap.PolygonEditor"
  | "AMap.PolylineEditor"
  | "AMap.MarkerCluster"
  | "AMap.RangingTool"
  | "AMap.CloudDataLayer"
  | "AMap.CloudDataSearch"
  | "AMap.Weather"
  | "AMap.RoadInfoSearch"
  | "AMap.HeatMap"
  | "AMap.PlaceSearchLayer"

type AMapUIPluginsType =
  | "overlay/SimpleMarker"
  | "overlay/SvgMarker"
  | "overlay/AwesomeMarker"
  | "overlay/SimpleInfoWindow"
  | "control/BasicControl"
  | "misc/PointSimplifier"
  | "misc/PathSimplifier"
  | "geo/DistrictExplorer"
  | "geo/DistrictCluster"
  | "misc/MarkerList"
  | "misc/MobiCityPicker"
  | "misc/PoiPicker"
  | "misc/PositionPicker"

export interface LoaderOption {
  /** 申请好的Web端开发者Key，首次调用 load 时必填 */
  key: string
  /** 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15 */
  version: string
  /** 插件列表 */
  plugins?: string[]
  /** 是否加载 AMapUI，缺省不加载 */
  AMapUI?: {
    /** AMapUI 缺省 1.1 */
    version?: string
    /** 需要加载的 AMapUI ui插件 */
    plugins?: string[]
  }
  /** 是否加载 Loca， 缺省不加载 */
  Loca?: {
    /** Loca 版本，缺省 1.3.2 */
    version?: string
  }
}

export interface LoaderProps {
  akey: string
  /**
   * 指定要加载的 JSAPI 的版本，缺省时默认为 2.0
   */
  AMapVersion?: string
  /** 插件列表 */
  AMapPlugins?: AMapPluginsType[]
  /** AMapUI 缺省 1.1 */
  AMapUIVersion?: string
  /** 需要加载的 AMapUI ui插件 */
  AMapUIPlugins?: AMapUIPluginsType[]
  /** Loca 版本，缺省 1.3.2 */
  LocaVersion?: string
  /** 加载完成触发 */
  loadEnd?: () => void
}

/**
 * AMap 地图加载
 * @param props
 * @returns
 */
export const Loader = (props: PropsWithChildren<LoaderProps>) => {
  const { akey, AMapVersion = "2.0", AMapPlugins = [], AMapUIVersion, AMapUIPlugins, LocaVersion, loadEnd = () => { } } = props
  const [loaderReady, setLoaderReady] = useState(false)
  const loaderOption: LoaderOption = {
    key: akey,
    version: AMapVersion,
    plugins: AMapPlugins,
    AMapUI: {
      version: AMapUIVersion,
      plugins: AMapUIPlugins
    },
    Loca: {
      version: LocaVersion
    }
  }
  if (!AMapUIVersion || !AMapUIPlugins) {
    delete loaderOption.AMapUI
  }
  if (!LocaVersion) {
    delete loaderOption.Loca
  }

  useEffect(() => {
    AMapLoader.load(loaderOption)
      .then(() => {
        setLoaderReady(true)
        loadEnd()
      })
      .catch(console.error)
  }, [])

  return <>{loaderReady && props.children}</>
}
