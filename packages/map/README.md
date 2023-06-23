# @wacky-idea/react-amap-map

## Install

~~~ bash
yarn add @wacky-idea/react-amap-map 
#or
npm install @wacky-idea/react-amap-map
~~~

## Usage

~~~ js
import { Map } from '@wacky-idea/react-amap-map';
~~~

## Example

~~~ ts example
// 打开控制台查看输出结果

import { Loader } from '@wacky-idea/react-amap-loader';
import { Map } from '@wacky-idea/react-amap-map';
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
      <Map style={{ width: "100%", height: "300px" }}>
      </Map>
    </Loader>
  )
}
~~~
