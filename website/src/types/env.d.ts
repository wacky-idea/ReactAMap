declare global {
  type APIENVType = "dev" | "prod"

  /** env 文件属性 */
  const APP_SITE_NAME: string

  const API_ENV: APIENVType
}

export { }

