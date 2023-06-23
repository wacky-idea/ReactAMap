import { CommonPagePorps } from "@/common/interface/umiRoute"
import React, { ReactNode } from "react"
import { useAuthContext } from "./AuthContext"

export interface AuthAccessProps extends CommonPagePorps {
  /** 判断权限条件 */
  accessible: string
  /** 没有权限 */
  fallback?: ReactNode
}
export const AuthAccess = (props: AuthAccessProps) => {
  const { auths } = useAuthContext()

  return <>{auths.includes(props.accessible) ? props.children : props.fallback}</>
}
