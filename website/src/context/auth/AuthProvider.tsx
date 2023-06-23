import { CommonPagePorps } from "@/common/interface/umiRoute"
import React, { useEffect, useState } from "react"
import { authContext } from "./AuthContext"

interface AuthProviderProps extends CommonPagePorps { }

export function AuthProvider(props: AuthProviderProps) {
  const [auths, setAuth] = useState<string[]>([])

  useEffect(() => {
    setAuth(["1", "2", "3"])
  }, [])

  return <authContext.Provider value={{ auths, setAuth }}>{props.children}</authContext.Provider>
}
