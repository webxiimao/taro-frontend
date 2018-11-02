import Taro from '@tarojs/taro'
import { logError, getToken } from '../utils'

const token = ''

/*http状态码*/
const HTTP_STATUS = {
    SUCCESS: 200,
    CLIENT_ERROR: 400,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}


/*环境地址*/
// const development = "http://127.0.0.1:5000";
const development = "http://192.168.3.184:5000";


export const baseOptions = function(params, method = 'GET') {
    let { url, data } = params
    let token = getToken()?"JWT "+getToken():""//从本地中获取token
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    const option = {
        isShowLoading: false,
        loadingText: '正在加载',
        url: development + url,
        data: data,
        method: method,
        header: { 'content-type': contentType , 'mToken' : token },
        success(res) {
            if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
                return logError('api', '请求资源不存在')
            } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
                return logError('api', '服务端出现了问题')
            } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
                return logError('api', '没有权限访问')
            } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
                return res.data
            }
        },
        error(e) {
            logError('api', '请求接口出现问题', e)
        }
    }
    return Taro.request(option)
}
export const get = function(url, data = '') {
    let option = { url, data }
    return baseOptions(option)
}
export const post = function (url, data, contentType) {
    let params = { url, data, contentType }
    return baseOptions(params, 'POST')
}

