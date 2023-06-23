import { CommonPagePorps } from "@/common/interface/umiRoute"
import { getToken, getUser, isUser, setToken, setUser, userContext, userInitialState, userReducer } from "@/context/user/UserContext"
import React, { useEffect, useReducer } from "react"

interface UserProviderProps extends CommonPagePorps { }

export function UserProvider(props: UserProviderProps) {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState)

  // init
  useEffect(() => {
    const token = getToken()
    if (token) {
      userDispatch({ token })
    }
    const user = getUser()
    if (isUser()) {
      userDispatch({ user })
    }
  }, [])

  // 判断登录状态
  useEffect(() => {
    if (userState.token) {
      // 已登录 获取用户信息
      if (!userState.user) {
        // 发送请求
        setTimeout(() => {
          const user = { userName: "xj", userId: "123" }
          userDispatch({ user })
        }, 1000)
      }
      console.log("已登录")
    } else {
      // 未登录
      console.log("未登录")
    }
  }, [userState.token])

  /**
   * 监听 user 变化则存储
   */
  useEffect(() => {
    if (Object.keys(userState.user || {}).length > 0) {
      setUser(userState.user || {})
    }
  }, [userState.user])

  /**
   * 监听 token 变化则存储
   */
  useEffect(() => {
    if (userState.token) {
      setToken(userState.token)
    }
  }, [userState.token])

  return <userContext.Provider value={{ ...userState, userState, userDispatch }}>{props.children}</userContext.Provider>
}
