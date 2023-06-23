import { defineTitle } from '@/utils/define';
import { InfoWindow } from '@wacky-idea/react-amap-info-window';
import { Loader } from '@wacky-idea/react-amap-loader';
import { Map } from '@wacky-idea/react-amap-map';
import React from "react";
import { Helmet } from 'umi';


export default function app() {
  return (
    <>
      <Helmet>
        <title>
          {defineTitle('信息窗口(info-window) 演示')}
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
        <Map style={{ width: "100%", height: "300px" }} center={[116.396329, 39.908899]}>
          <InfoWindow position={[116.397453, 39.909189]}>{"这里是信息窗口"}</InfoWindow>
        </Map>
      </Loader>
    </>
  )
}
