import { IConfigFromPlugins } from "@/.umi/core/pluginConfig"
import { IConfig, defineConfig } from "umi"
import { getGlobalEnv } from "../src/utils/getEnv"
import { getPackagesMapping, getPackagesPath } from "./utils"

const env = process.env.API_ENV
const packagesPath = getPackagesPath()
/**
 * 默认加载配置
 * https://v3.umijs.org/zh-CN/config
 */
const config: IConfigFromPlugins | IConfig = {
  define: {
    ...getGlobalEnv(),
    // 通过 cross-env 携带参数
    API_ENV: env || "dev"
  },
  /** 路由base */
  // base: "/react-amap/",
  /** 资源文件路径 */
  // publicPath: "/react-amap/",
  /** 使用 react-helmet 覆盖title */
  title: false,
  /** 挂载节点id */
  mountElementId: "app",
  /** 文件添加 hash */
  hash: true,
  /** 拆分页面 css js */
  dynamicImport: {},
  /** 开启ssr */
  // ssr: {},
  /** 开启模块热替换 */
  fastRefresh: {},
  /** 导出静态资源 */
  exportStatic: {},
  /** 兼容ie11 */
  targets: {
    ie: 11
  },
  scripts: [
    "https://webapi.amap.com/loader.js",
    /** 开发环境添加控制台 */
    env === "dev" ? "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/eruda/2.4.1/eruda.min.js" : ""
  ],
  alias: packagesPath ? getPackagesMapping() : {},
  chainWebpack: conf => {

    /**
     * 将 packages 包源码添加到 ts load上
     */
    if (packagesPath) {
      conf.module.rules.get("ts-in-node_modules").include.add(packagesPath)
    }

    /**
     * 处理非 esm 模块报错
     * Can't import the named export 'put' from non EcmaScript module (only default export is available)
     */
    conf.module.rule('mjs$').test(/.mjs$/).include.add(/node_modules/).end().type('javascript/auto');
  }
}

if (env === 'map') {
  config['base'] = '/react-amap/';
  config['publicPath'] = '/react-amap/';
}

export default defineConfig(config)
console.log(getPackagesMapping())
