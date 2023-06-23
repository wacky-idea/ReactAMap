import { defineTitle } from '@/utils/define';
import { Loader } from '@wacky-idea/react-amap-loader';
import { Map } from '@wacky-idea/react-amap-map';
import { Marker } from '@wacky-idea/react-amap-marker';
import React from "react";
import { Helmet } from 'umi';


export default function app() {
  return (
    <>
      <Helmet>
        <title>
          {defineTitle('标记点(marker) 演示')}
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
        <Map style={{ width: "100%", height: "100%" }} center={[114.304145, 30.593569]}>
          <Marker position={[114.304145, 30.593569]} icon={"//vdata.amap.com/icons/b18/1/2.png"} />
        </Map>
      </Loader>
    </>
  )
}
