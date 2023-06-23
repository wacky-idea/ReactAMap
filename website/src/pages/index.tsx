import { defineTitle } from '@/utils/define';
import { Loader } from '@wacky-idea/react-amap-loader';
import React from "react";
import { Helmet } from 'umi';


export default function app() {

  return (
    <>
      <Helmet>
        <title>
          {defineTitle('地图加载(loader) 演示')}
        </title>
      </Helmet>
      <p>打开控制台查看 加载进度</p>
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
    </>
  )
}
