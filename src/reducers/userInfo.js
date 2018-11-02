import Taro from '@tarojs/taro'
import { PUT } from '../constants/userInfo'

const USER_INFO = {
    info:{

    }
}

export default function userInfo (state = USER_INFO, action) {
    switch (action.type) {
        case PUT:
            return {
                ...state,
                info: action.info,

            }
        default:
            return state
    }
}
