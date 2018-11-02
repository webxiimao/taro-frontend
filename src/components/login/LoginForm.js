import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput ,AtForm, AtButton } from 'taro-ui'


import './LoginForm.scss'



class LoginForm extends Component {
    config = {
        navigationBarTitleText: '用户'
    }

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }

    getUsername(value){
        this.setState({
            username:value
        })

    }

    getPassword(value){
        this.setState({
            password:value
        })
    }

    usernameChange(value){
        this.props.getUsername(value)
    }

    passwordChange(value){
        this.props.getPassword(value)
    }

    handleLogin(){
        if(this.props.getBlogToken) {
            this.props.getBlogToken(this.state)
        }
    }

    render() {
        return (
            <View>
                <AtForm>
                    <AtInput
                        name='value'
                        title='请输入用户名'
                        type='text'
                        placeholder='标准五个字'
                        value={this.props.username}
                        onChange={this.getUsername.bind(this)}
                    />
                    <AtInput
                        name='value'
                        title='请输入密码'
                        type='password'
                        placeholder='标准五个字'
                        value={this.props.password}
                        onChange={this.getPassword.bind(this)}
                    />
                    <AtButton type='primary' onClick={this.handleLogin.bind(this)}>登录</AtButton>
                </AtForm>


            </View>
        )
    }
}

export default LoginForm
