import Taro, { Component } from "@tarojs/taro"
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { put } from "../../actions/userInfo"
import './editUser.scss'
import {post} from "../../servers/http";
import api from "../../servers/api";
import {getUrl} from "../../utils"


class editUser extends Component {

    config = {
        navigationBarTitleText: '修改资料'
    }

    componentWillUnmount () {

    }

    componentDidShow () {


    }

    componentDidHide () { }

    render () {
        return (
            <View className='main'>
                <View><Text>This is editUser Page!</Text></View>
            </View>
        )
    }
}

export default editUser
