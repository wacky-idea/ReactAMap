# @wacky-idea/react-amap-marker

## Install

~~~ bash
yarn add @wacky-idea/react-amap-marker 
#or
npm install @wacky-idea/react-amap-marker
~~~

## Usage

~~~ js
import { Marker } from '@wacky-idea/react-amap-marker';
~~~

## Example

~~~ ts example
// 打开控制台查看输出结果

import { Loader } from '@wacky-idea/react-amap-loader';
import { Map } from '@wacky-idea/react-amap-map';
import { Marker } from '@wacky-idea/react-amap-marker';
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
        <Marker position={[114.304145, 30.593569]} icon={"//vdata.amap.com/icons/b18/1/2.png"} />
      </Map>
    </Loader>
  )
}
~~~
