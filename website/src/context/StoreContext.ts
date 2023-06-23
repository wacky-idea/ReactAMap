// 全局上下文

import { MapCurrentPoint } from "@/store/MapCurrentPoint"
import { MapPointsData } from "@/store/MapPointsData"
import { MapSceneConfig } from "@/store/MapSceneConfig"
import { SocketIo } from "@/store/SocketIo"
import { createContext } from "react"

// 利用createContext 创建storeContext
const context = {
  mapPointsData: new MapPointsData(),
  mapSceneConfig: new MapSceneConfig(),
  mapCurrentPoint: new MapCurrentPoint(),
  socketIo: new SocketIo()
  // 当然可以new 多个store啦
  // aStore:new AStore()
  // ....
}
export const storeContext = createContext(context)

if (API_ENV === "dev") {
  window["store"] = context
}
