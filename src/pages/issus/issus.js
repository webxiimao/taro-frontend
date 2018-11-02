import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import api from "../../servers/api"
import {getUrl} from "../../utils"
import { get,post } from "../../servers/http"
import './issus.scss'


@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add () {
        dispatch(add())
    },
    dec () {
        dispatch(minus())
    },
    asyncAdd () {
        dispatch(asyncAdd())
    }
}))
class Issus extends Component {

    config = {
        navigationBarTitleText: '发布'
    }

    componentDidMount(){
        let self = this
        self.getTest()
    }

    componentWillReceiveProps () {
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    getTest(){
        let url = getUrl(api.test.hello)
        get(url).then(res=>{
            console.log(res);
        })
    }

    render () {
        return (
            <View className='discover main'>
                <View><Text>This is issus page</Text></View>
            </View>
        )
    }
}

export default Issus
