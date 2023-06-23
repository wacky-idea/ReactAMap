# @wacky-idea/react-amap-loader

> 基于官方 `@amap/amap-jsapi-loader` 实现的加载高德地图 `sdk`

## Install

~~~ bash
yarn add @wacky-idea/react-amap-loader 
#or
npm install @wacky-idea/react-amap-loader
~~~

## Usage

~~~ js
import { Loader } from '@wacky-idea/react-amap-loader';
~~~

## Example

~~~ ts example
// 打开控制台查看输出结果

import { Loader } from '@wacky-idea/react-amap-loader';
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
    </Loader>
  )
}
~~~
