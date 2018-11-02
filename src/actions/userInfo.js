import {
    PUT
} from '../constants/userInfo'

export const put = (info) => {
    return {
        type: PUT,
        info:info,
    }
}
