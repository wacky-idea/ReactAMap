/**
 * 标题格式为 {title | env.SITE_TITLE}
 * @param title 标题
 * @returns
 */
export function defineTitle(title: string) {
  // SITE_NAME 定义来自 umi -> config -> define 定义全局内容
  return `${title} | ${APP_SITE_NAME}`
}
