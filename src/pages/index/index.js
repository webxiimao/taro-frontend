import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { put } from "../../actions/userInfo"
import './index.scss'
import {post} from "../../servers/http";
import api from "../../servers/api";
import {getUrl} from "../../utils"



@connect((userInfo)=>userInfo,(dispatch)=>({
    put(info){
        dispatch(put(info))
    }
}))
class Index extends Component {

    config = {
        navigationBarTitleText: '首页'
    }

    getUserInfo(){
        let self = this
        let url = getUrl(api.user.info)
        post(url).then(res => {
            if(res.data.status){
                self.props.put(
                    res.data.data
                )
            }
        })
    }


    componentWillUnmount () {

    }

    componentDidShow () {
        this.getUserInfo()

    }

    componentDidHide () { }

    render () {
        return (
            <View className='main'>
                <View><Text>Hello, {this.props.userInfo.info.nickname}</Text></View>
            </View>
        )
    }
}

export default Index
