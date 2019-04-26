/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // UI组件,首页
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View,Image ,ScrollView} from 'react-native';
import PageControl from 'react-native-page-control'
import HomeMenuItem from './HomeMenuItem'
import screen from '../common/screen'
import color from '../widget/color'

type Props = { 
    menuInfos: Array<Object>,
    onMenuSelected : Function,
        
    
}
type State = {
    currentPage : number,
}
class HomeMenuView extends PureComponent<Props ,State> {

    constructor(props: Object){
        super(props)
        this.state = {
            currentPage:0,
        }
    }

    onScroll = (e) => {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / screen.width)
        if (this.state.currentPage != currentPage){
            this.setState({currentPage:currentPage})
        }
    }

    render() {
        let {menuInfos , onMenuSelected} = this.props

        let pageCount = Math.ceil(menuInfos.length / 10)
        console.log(pageCount)
        console.log(menuInfos[0].title)

        let menuElements = menuInfos.map((info,index) => {
            return (<HomeMenuItem 
                key={index}
                title ={info.title}
                icon = {info.icon}
                onPress = {()=>{
                    onMenuSelected(index)
                }}
            ></HomeMenuItem>)
        })
        let menuViews = []
        for(let i=0; i < pageCount; i++){
            let elementsPerPage = menuElements.slice(i*10,i*10+10)
            let menuView = (
                <View key={i} style={styles.itemsView}>
                    {elementsPerPage}
                </View>
            )
            menuViews.push(menuView)
        }

        
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    // 设置以下属性隐藏滚动条
                    showsHorizontalScrollIndicator={false}
                    onScroll = {this.onScroll}
                >
                    {menuViews}
                </ScrollView>

                <PageControl 
                    设置轮播下方的页数点
                    style = {styles.pageCount}
                    numberOfPages = {pageCount}
                    currentPage = {this.state.currentPage}
                    pageIndicatorTintColor = 'gray'
                    currentPageIndicatorTintColor = {color.primary}

                />
            </View>
        );
    }
}
 
const styles = StyleSheet.create ({
    itemsView : {
        flexDirection : 'row',
        flexWrap:'wrap',
        width: screen.width,
    },
    container : {
        backgroundColor:'white'
    },
    pageCount : {
        margin : 10,
    }
})

export default HomeMenuView;