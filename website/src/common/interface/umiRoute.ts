import { ReactNode } from "react"
import { StaticContext, match } from "react-router"
import { History, IRoute, Location } from "umi"

// 这里是用来补全不存在的类型

export interface CommonPagePorps {
  children?: ReactNode
  location?: Location
  history?: History
  match?: match
  staticContext?: StaticContext
  route?: RouteItem
  routes?: RouteItem[]
}

export interface RouteItem extends IRoute {
  component: ReactNode
  title?: string
  routes?: RouteItem[]
  sort: any
  menu?: boolean
}
