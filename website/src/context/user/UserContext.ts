import cookies from "js-cookie"
import { createContext, Dispatch, useContext } from "react"
/**
 * @description 用户信息
 */
export interface UserModel {
  userName?: string
}

/**
 * 用户上下文初始化值
 */
export interface UserInitialState {
  /** 登录 token */
  token?: string
  /** 用户信息 */
  user?: UserModel
}

export interface UserContext {
  userState: UserInitialState
  userDispatch: Dispatch<UserInitialState>
}
export const userReducer = (state: UserInitialState, action: UserInitialState) => {
  return {
    ...state,
    ...action
  }
}

export const userInitialState: Partial<UserInitialState> = {}

export const userContext = createContext<UserContext>({
  userState: userInitialState,
  userDispatch: () => null
})

export function useUserContext() {
  const { userState, userDispatch } = useContext(userContext)
  // return { ...userState, userState, userDispatch }; //禁止除了登录页面其他页面使用dispatch
  return { ...userState, userState }
}

/**
 * 设置token
 */
export function setToken(token: string) {
  localStorage.setItem("token", token)
  cookies.set("token", token)
}

/**
 * 获取token
 * @returns
 */
export function getToken(): string | undefined {
  return localStorage.getItem("token") || cookies.get("token")
}

/**
 * 删除token
 * @param user
 */
export function removeToken() {
  localStorage.removeItem("token")
  cookies.remove("token")
}

/**
 * 设置用户信息
 */
export function setUser(user: UserModel) {
  cookies.set("user", JSON.stringify(user))
}

/**
 * 获取用户信息
 * @returns {UserModel} 用户信息
 */
export function getUser(): UserModel {
  return JSON.parse(cookies.get("user") || "{}")
}

/**
 * 判断是否有用户信息
 * @returns
 */
export function isUser(): boolean {
  return Object.keys(getUser()).length > 0
}
