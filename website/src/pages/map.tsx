import { defineTitle } from '@/utils/define';
import { Loader } from '@wacky-idea/react-amap-loader';
import { Map } from '@wacky-idea/react-amap-map';
import React from "react";
import { Helmet } from 'umi';

export default function app() {
  return (
    <>
      <Helmet>
        <title>
          {defineTitle('地图(map) 演示')}
        </title>
      </Helmet>
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
    </>
  )
}
