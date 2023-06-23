import { defineTitle } from '@/utils/define';
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
      <p>打开控制台查看</p>
    </>
  )
}
