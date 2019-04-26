/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View , Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, TabBarBottom , createStackNavigator} from "react-navigation";
import TabBarItem from './widget/TabBarItem'
import HomeScene from './Home/HomeScene'
import NearbyScene from './Nearby/NearbyScene'
import OrberScene from './Orber/OrberScene'
import MineScene from './Mine/MineScene'
import color from './widget/color'
import WebScene from './web/WebScene'


class Bootscene extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <AppContainer />
        )
    }
}

const Tab = createBottomTabNavigator ({
    Home : {
        screen: createStackNavigator({ Home:HomeScene }),
        navigationOptions : ()=>({
            tabBarLabel : '首页',
            tabBarIcon: ({ focused , tintColor }) => (
                <TabBarItem 
                    tintColor={tintColor}
                    focused = {focused}
                    normalImage = {require('./img/tabbar/tabbar_homepage.png')}
                    selectedImage = {require('./img/tabbar/tabbar_homepage_selected.png')}
                />
            )
        })
    },
    Nearby : {
        screen: createStackNavigator({ Nearby:NearbyScene }),
        navigationOptions : ()=>({
            tabBarLabel : '附近',
            tabBarIcon: ({ focused , tintColor }) => (
                <TabBarItem 
                    tintColor={tintColor}
                    focused = {focused}
                    normalImage = {require('./img/tabbar/tabbar_merchant.png')}
                    selectedImage = {require('./img/tabbar/tabbar_merchant_selected.png')}
                />
            )
        })
    },
    Order : {
        screen: createStackNavigator({ Order:OrberScene }),
        navigationOptions : ()=>({
            tabBarLabel : '订单',
            tabBarIcon: ({ focused , tintColor }) => (
                <TabBarItem 
                    tintColor={tintColor}
                    focused = {focused}
                    normalImage = {require('./img/tabbar/tabbar_order.png')}
                    selectedImage = {require('./img/tabbar/tabbar_order_selected.png')}
                />
            )
        })
    },
    Mine : {
        screen: createStackNavigator({ Mine:MineScene }),
        navigationOptions : ()=>({
            tabBarLabel : '我的',
            tabBarIcon: ({ focused , tintColor }) => (
                <TabBarItem 
                    tintColor={tintColor}
                    focused = {focused}
                    normalImage = {require('./img/tabbar/tabbar_mine.png')}
                    selectedImage = {require('./img/tabbar/tabbar_mine_selected.png')}
                />
            )
        })
    }
},{
    // 设置底部导航栏的样式
    
    tabBarComponent:TabBarBottom,
    // 导航栏显示于顶部还是底部 (top / bottom)
    tabBarPosition:'bottom',
    // 是否开启导航懒加载
    lazy:true,
    // 是否启用动画
    animationEnabled: true,
    swipeEnabled:false,
    tabBarOptions: {
        activeTintColor:color.primary,
        inactiveTintColor:color.gray,
        style:{backgroundColor:'white'}
    }
})

Tab.navigationOptions = {
    header:null,
}

const AppNavigator = createStackNavigator({
    Tab:{screen:Tab},
    WebScene:WebScene,
},{
    defaultNavigationOptions: {
        // 是否显示返回 'back'
        headerBackTitle:null,
        // 设置返回按钮的颜色
        headerTintColor:'#333'
    }
})

// 创建一个组件
const AppContainer = createAppContainer(AppNavigator)


// 导出组件
export default Bootscene;