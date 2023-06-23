# @wacky-idea/react-amap-point-simplifier

> 扩展高德海量点鼠标右键事件 `pointRightClick`

## Install

~~~ bash
yarn add @wacky-idea/react-amap-point-simplifier 
#or
npm install @wacky-idea/react-amap-point-simplifier
~~~

## Usage

~~~ js
import { PointSimplifier } from '@wacky-idea/react-amap-point-simplifier';
~~~

## Example

~~~ ts example
// 打开控制台查看输出结果

import { Loader } from '@wacky-idea/react-amap-loader';
import { Map } from '@wacky-idea/react-amap-map';
import { PointSimplifier } from '@wacky-idea/react-amap-point-simplifier';
import React, { useEffect } from "react";

export default function app() {
  return (
    <Loader
      loadEnd={() => {
        console.log("sdk 加载完毕 (๑•̀ㅂ•́)و✧")
      }}
      akey="f7912b3946b0416ba527bcc4c535d48b"
      AMapPlugins={["AMap.CitySearch"]}
      AMapUIVersion="1.1"
      AMapUIPlugins={["misc/PointSimplifier"]}
    >
      <Map style={{ width: "100%", height: "300px" }} center={[114.304145, 30.593569]}>
        <PointSimplifier
          data={[
            {
              id: "123456789",
              name: "我是海量点",
              lat: "30.593569",
              lng: "114.304145"
            }
          ]}
          pointMouseout={(type, record) => {
            console.log("pointMouseout", type, record)
          }}
          pointMouseover={(type, record) => {
            console.log("pointMouseover", type, record)
          }}
          pointClick={(type, record) => {
            console.log("pointClick", type, record)
          }}
          pointRightClick={(type, record) => {
            console.log("pointRightClick", type, record)
          }}
          option={{
            renderOptions: {
              hoverTitleStyle: {
                position: "top"
              },
              pointHoverStyle: {
                content: "none"
              }
            }
          }}
        />
      </Map>
    </Loader>
  )
}
~~~
