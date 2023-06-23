import { existsSync, readdirSync, readFileSync } from "fs"
import { resolve, sep } from "path"

const env = process.env.API_ENV || ''
const packageName = '@react-amap'
const tempPackagesPath = resolve(__dirname, `../../packages`)
const tempNodeModulesPath = resolve(__dirname, `../../node_modules/${packageName}/`)

/**
 * 获取 lerna packages 路径
 * @param _env 环境变量 dev 才生效
 * @returns
 */
export function getPackagesPath(_env = env) {
  if (_env === 'dev') {
    if (existsSync(tempPackagesPath)) {
      return tempPackagesPath
    } else {
      if (existsSync(tempNodeModulesPath)) {
        return tempNodeModulesPath
      } else {
        return ''
      }
    }
  } else {
    return ''
  }
}
export interface PackagesMapping {
  [key: string]: string
}

/**
 * 获取 lerna packages 包名映射路径
 * '@com/package':"path/package/src/index.{js|ts|tsx}"
 * https://v3.umijs.org/zh-CN/config#alias
 *
 * @param _env 环境变量 dev 才生效
 * @returns
 */
export function getPackagesMapping(_env = env): PackagesMapping {
  if (_env === 'dev') {
    const result: PackagesMapping = {}
    const packagesPath = getPackagesPath()
    if (packagesPath != '') {
      const list = readdirSync(getPackagesPath())
      list.forEach(m => {
        const packageConfig = resolve(packagesPath, m, 'package.json')
        if (existsSync(packageConfig)) {
          const { typings, main, module } = JSON.parse(readFileSync(packageConfig).toString())
          let entry = "src/index.ts"
          if (!!typings && existsSync(resolve(packagesPath, m, typings))) {
            entry = typings
          }
          if (main && existsSync(resolve(packagesPath, m, main))) {
            entry = main
          }
          if (module && existsSync(resolve(packagesPath, m, module))) {
            entry = module
          }
          // result[join(packageName, m)] = resolve(packagesPath, m, entry)
          // result[`${resolve(packageName, m)}${sep}`] = `${resolve(packagesPath, m)}${sep}`
          result[`${packageName}/${m}`] = resolve(packagesPath, m, entry)
          result[`${packageName}/${m}/`] = `${resolve(packagesPath, m)}${sep}`
        }
      })
      return result
    } else {
      return {}
    }
  } else {
    return {}
  }
}

