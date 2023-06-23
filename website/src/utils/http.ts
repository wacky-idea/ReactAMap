import axios, { AxiosResponse } from 'axios';

/**
 * 普通 get
 * @param url
 * @param params
 * @returns
 */
export function get<M>(
  url: string,
  params?: any,
): Promise<AxiosResponse<M, any>> {
  return axios
    .get<M>(url, {
      params,
    })
    .then((item) => item);
}

/**
 * 普通 get 获取 Bolb 对象
 * @param url
 * @param params
 * @returns
 */
export function getBolb<M>(
  url: string,
  params?: any,
): Promise<AxiosResponse<M, any>> {
  return axios
    .get<M>(url, {
      params,
      responseType: 'blob',
    })
    .then((item) => item);
}

/**
 * 普通 post
 * @param url
 * @param params
 * @returns
 */
export function post<M>(
  url: string,
  params?: any,
): Promise<AxiosResponse<M, any>> {
  return axios.post<M>(url, params).then((item) => item);
}

/**
 * 普通 postFormData
 * @param url
 * @param params
 * @returns
 */
export function postFormData<M>(
  url: string,
  params?: FormData,
): Promise<AxiosResponse<M, any>> {
  return axios
    .post<M>(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((item) => item);
}

/**
 * ------------------------------------------------
 * 自定义响应状态
 * ------------------------------------------------
 */

/** 响应体 */
export interface BaseResponse<M = {}> {
  code: number;
  message: string;
  data: M; //返回的数据字段
}

/** 分页响应体 */
export interface BasePageResponse<M = {}> {
  code: number;
  message: string;
  data: M; //返回的数据字段
}

/**
 * get 获取 BaseResponse 响应请求
 * @param url
 * @param params
 * @returns
 */
export function getByResponse<M>(
  url: string,
  params?: any,
): Promise<BaseResponse<M>> {
  return axios
    .get<BaseResponse<M>>(url, {
      params,
    })
    .then((item) => item.data);
}

/**
 * get 获取 BasePageResponse 分页
 * @param url
 * @param params
 * @returns
 */
export function getByPage<M>(
  url: string,
  params?: any,
): Promise<BasePageResponse<M>> {
  return axios
    .get<BasePageResponse<M>>(url, {
      params,
    })
    .then((item) => item.data);
}

/**
 * post 发送 Response 请求
 * @param url
 * @param params
 * @returns
 */
export function postByResponse<M>(
  url: string,
  params?: any,
): Promise<BaseResponse<M>> {
  return axios.post<BaseResponse<M>>(url, params).then((item) => item.data);
}

/**
 * post 发送 formData BaseResponse 请求
 * @param url
 * @param params
 * @returns
 */
export function postFormDataByResponse<M>(
  url: string,
  params?: FormData,
): Promise<BaseResponse<M>> {
  return axios
    .post<BaseResponse<M>>(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((item) => item.data);
}
