export type TypeInterceptor = {
  reqSuccess: (config: any) => any,
  reqFail: (error: any) => any
  resSuccess: (response: any) => any
  resFail: (error: any) => any
}

export type TypeFormatResponse = (params: {data: {[key:string]: any}, status: number}) => ({
  data: {[key: string]: any},
  [key: string]: any,
})

export interface TypeRestfulParams {
  baseURL: string;
  timeout?: number; //  預設 1000
  headers?: {[key: string]: string}; // optional, 設定預設 headers
  version?: string; // optional, 預設空字串 '', e.g. '/v1'
  useAuth?: boolean; // optional, 預設true
  authFunc?: () => string; //optional, 取得token方式, 預設從localStorage取token
  formatResponse?: TypeFormatResponse; // optional, request回傳格式, 預設回傳狀態碼與資料
  interceptor?: TypeInterceptor; //  optional, 攔截器function {reqSuccess, reqFail, resSuccess, resFail}
};

export  type TypeRestful = (params: TypeRestfulParams) => any

const restful: TypeRestful = ({
  baseURL = "",
  timeout = 1000,
  headers = {},
  version = '',
  useAuth = true,
  authFunc = () => ''
  // formatResponse: formatResponseFunc = formatResponse,
  // interceptor: interceptorFunc = interceptor,
}) => () => {};