import { PropsWithChildren, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
export interface PortalProps {}

export const usePortal = () => {
  const containerRef = useRef<HTMLDivElement>(document.createElement("div"))
  const render = useCallback((props: PropsWithChildren<PortalProps>) => {
    const { children } = props
    return createPortal(children, containerRef.current)
  }, [])

  return { Portal: render, container: containerRef.current }
}
