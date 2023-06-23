declare global {
  namespace AMap {
    /**
     * IP定位获取当前城市信息
     */
    class CitySearch {
      getLocalCity(fun: (status: string, result: any) => void): void
    }
  }
}
export { };

