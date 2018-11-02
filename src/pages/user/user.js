import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton , AtInput ,AtForm, AtAvatar } from 'taro-ui'
import { post } from "../../servers/http"
import { connect } from '@tarojs/redux'
import api from "../../servers/api"
import {getUrl} from "../../utils"
import {put} from "../../actions/userInfo"

import './user.scss'

import LoginForm from "../../components/login/LoginForm"


@connect(userInfo=>userInfo, dispatch=>({
    put(info){
        dispatch(put(info))
    }
}))
class User extends Component {

    config = {
        navigationBarTitleText: '用户'
    }

    constructor(props){
        super(props)
        this.state = {
            // isLogin:false
        }
    }

    componentDidMount(){
        console.log(this.props.userInfo);
    }

    getUserInfo(){
        let self = this
        let url = getUrl(api.user.info)
        post(url).then(res => {
            console.log(res);
            if(res.data.status){
                self.props.put(
                    res.data.data
                )
                console.log(self.props.userInfo);
            }
        })
    }

    /*登录获取token*/
    handleBlogToken(state){
        let self = this
        let url = getUrl(api.user.login)
        post(url, {
            username:state.username,
            password:state.password
        }).then(res => {
            if(res.statusCode == 200){
                console.log(res.data.data);
                Taro.setStorage({
                    key:"mToken",
                    data:res.data.data
                }).then(res=>{
                    console.log(res.errMsg);
                    if(res.errMsg =="setStorage:ok"){
                        self.getUserInfo()
                    }
                })
            }
        })
    }

    handleLogout(){
        let self = this;
        let url = getUrl(api.user.logout)
        post(url).then(res=>{
            console.log(res);
            self.props.put({})
        })
    }

    gotoEdit(){
        console.log("edit");
        Taro.navigateTo({
            url:"/pages/editUser/editUser"
        })
    }



    render () {
        return (
            <View className='user main'>
                <View className='login clearfix'>
                    {this.props.userInfo.info.id&&
                        <View hoverClass="logout-click" onClick={this.handleLogout.bind(this)} className="logout">登出</View>
                    }
                    {this.props.userInfo.info.id?
                        <View className="is-login" style="text-align:center;">
                            <View onClick={this.gotoEdit.bind(this)} className="user-avatar">
                                <AtAvatar circle size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
                            </View>
                            <View className="user-hello">你好！{this.props.userInfo.info.nickname}</View>
                        </View>:
                    <LoginForm
                        getBlogToken={state => this.handleBlogToken(state)}
                        username={this.state.username}
                        password={this.state.password}
                    >
                    </LoginForm>}


                </View>

            </View>
        )
    }
}

export default User
