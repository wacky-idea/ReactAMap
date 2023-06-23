import { get } from "@/utils/http"
interface PointsItem {
  i: string
  n: string
  t: string
  g: string
}
export const getPoints = () => {
  return get<PointsItem[]>("./points.json").then(res => {
    // 处理压缩数据
    return res.data.map(item => {
      return {
        id: item.i,
        name: item.n,
        lat: item.t,
        lng: item.g
      }
    })
  })
}
