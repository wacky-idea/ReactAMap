import { createContext, Dispatch, SetStateAction, useContext } from "react"

export interface AuthContext {
  auths: string[]
  setAuth: Dispatch<SetStateAction<string[]>>
}

export const authContext = createContext<AuthContext>({
  auths: [],
  setAuth: () => null
})

export function useAuthContext() {
  const { auths, setAuth } = useContext(authContext)
  // return { auths, setAuth }//禁止 其他页面使用 setAuth
  return { auths }
}
