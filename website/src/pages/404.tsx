import React from "react"
import { Helmet } from "umi"

export default function app() {
  return (
    <>
      <Helmet>
        <title>{"404啦!"}</title>
      </Helmet>
      <div>404</div>
    </>
  )
}
