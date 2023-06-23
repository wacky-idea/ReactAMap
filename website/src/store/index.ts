import { useContext } from "react"
import { storeContext } from "../context/StoreContext"
export const useStore = () => useContext(storeContext)
