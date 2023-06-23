// import { defineConfig } from 'rollup';
const typescript = require('rollup-plugin-typescript2')
const packageConfig = require('./package.json')

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: packageConfig.typings,
  output: [
    {
      file: packageConfig.main,
      format: 'cjs',
      sourcemap: true,
      banner: `/*! ${packageConfig.name} v${packageConfig.version} | (c) ${new Date().getFullYear()} */`,
      footer: `window['__REACT_APAM_PACKAGE_INFO__']={...window['__REACT_APAM_PACKAGE_INFO__'],'${packageConfig.name}':'${packageConfig.version}'};`,
    },
    {
      file: packageConfig.module,
      format: 'esm',
      sourcemap: true,
      banner: `/*! ${packageConfig.name} v${packageConfig.version} | (c) ${new Date().getFullYear()} */`,
      footer: `window['__REACT_APAM_PACKAGE_INFO__']={...window['__REACT_APAM_PACKAGE_INFO__'],'${packageConfig.name}':'${packageConfig.version}'};`,
    }
  ],
  external: ['react', 'react-dom', '@wacky-idea/react-amap-hook', '@wacky-idea/react-amap-map'],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
};
