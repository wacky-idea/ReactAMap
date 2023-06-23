import { getDevice } from "aomd-ua"

/**
 * 获取在全面屏下提供自适应的边距调整
 *
 * @param type
 * @returns
 */
export function getSafeArea(type: SafeType): string {
  return getComputedStyle(document.documentElement).getPropertyValue(type)
}

/**
 * 是 pc
 * @returns
 */
export function isPC(ua: string): boolean {
  return getDevice(ua) === "PC"
}

/**
 * 是 mobile
 * @param ua
 * @returns
 */
export function isMobile(ua: string): boolean {
  return !isPC(ua)
}

