import { CommonPagePorps } from "@/common/interface/umiRoute"
import { AuthProvider } from "@/context/auth/AuthProvider"
import { UserProvider } from "@/context/user/UserProvider"
import React from "react"
import "./index.less"

interface LayoutProps extends CommonPagePorps { }
export default function app(props: LayoutProps) {
  return (
    <UserProvider>
      <AuthProvider>{props.children}</AuthProvider>
    </UserProvider>
  )
}
