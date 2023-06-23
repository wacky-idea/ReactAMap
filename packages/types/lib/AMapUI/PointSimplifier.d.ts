declare global {
  namespace AMapUI {
    namespace PointSimplifier { }

    /** 自定义海量点信息 */
    interface PointDataItem {
      lat: string
      lng: string
      id: string
      name: string
    }

    type PointSimplifierEvent = "pointClick" | "pointMouseover" | "pointMouseout" | "pointRightClick"

    interface PointSimplifierConfig<T = {}> {
      map?: AMap.Map
      zIndex?: number
      data?: any[]
      getPosition?: (dataItem: any, dataIndex: number) => void
      getHoverTitle?: (dataItem: T & PointDataItem, dataIndex: number) => void
      compareDataItem?: (a: any, b: any, aIndex: number, bIndex: number) => void
      autoSetFitView?: boolean
      renderConstructor?: any
      renderOptions?: any
      maxChildrenOfQuadNode?: number
      maxDepthOfQuadTree?: number
      badBoundsAspectRatio?: number
    }

    class PointSimplifier<T = {}> {
      constructor(props: PointSimplifierConfig<T & PointDataItem>)
      on(name: PointSimplifierEvent, callback: (type: PointSimplifierEvent, record: { data: T & PointDataItem; index: number }) => void): void
      off(name: PointSimplifierEvent, callback: (type: PointSimplifierEvent, record: { data: T & PointDataItem; index: number }) => void): void
      renderLater(time: number): void
      setData<T>(data: T & PointDataItem[]): void
      hide(): void
      show(): void
      render(): void
      trigger(type: PointSimplifierEvent, record: { data: T & PointDataItem; index: number }): void
    }

  }
}

export { }

