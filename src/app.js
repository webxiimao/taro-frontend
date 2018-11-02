import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {

    config = {
        pages: [
            'pages/index/index',
            'pages/issus/issus',
            'pages/user/user',
            'pages/editUser/editUser'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        "tabBar": {
            "list": [
                {
                    "pagePath": "pages/index/index",
                    "text": "首页",
                    "iconPath":"./asset/imgs/index.png",
                    "selectedIconPath":"./asset/imgs/index_focus.png"
                },
                {
                    "pagePath": "pages/issus/issus",
                    "text": "发布",
                    "iconPath":"./asset/imgs/discovery.png",
                    "selectedIconPath":"./asset/imgs/discovery_focus.png"
                },
                {
                    "pagePath": "pages/user/user",
                    "text": "我",
                    "iconPath":"./asset/imgs/user.png",
                    "selectedIconPath":"./asset/imgs/user_focus.png"
                },
            ]
        },
    }




    componentDidMount () {

    }

    componentDidShow () {}

    componentDidHide () {}

    componentCatchError () {}

    render () {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
