/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {StyleSheet, Text, View,Image, TouchableOpacity ,Dimensions} from 'react-native';
import color from '../widget/color';
import NavigationItem from '../widget/NavigationItem';
import api from '../api'
import HomeMenuView from './HomeMenuView'
import HomeGridItem from './HomeGridItem'

type Props = {
    
}
type State = {
    // discounts : Array<Object>,
}


class HomeScene extends PureComponent<Props,State> {
    static navigationOptions = () => ({
        headerStyle: {backgroundColor : color.primary},
        headerTitle: (
            <TouchableOpacity  style={styles.searchBar}>
                <Image source={require('../img/home/search_icon.png')} style={styles.searchIcon} />
                <Text style={{fontSize:14}}>搜索</Text>
            </TouchableOpacity>
        ),
        headerLeft : (
            <NavigationItem  title='定位' titleStyle={{color:'white'}} onPress={()=> {
                 alert('test')
            }} />
        ),
        headerRight : (
            <NavigationItem  
                icon={require('../img/mine/icon_navigation_item_message_white.png')}
                onPress={()=> {

                }}
            />
        ),
        headerLeft: (
            <NavigationItem
              title='福州'
              titleStyle={{ color: 'white' }}
              onPress={() => {
      
              }}
            />
          )
    })
    // constructor(props:Props) {
    //     super(props);
    //     this.state = {
    //         discounts: [],
    //     };
    // }

    // componentDidMount() {
    //     this.requestData()
    // }

    // requestDate = async() => {
    //     try {
    //         let response = await fetch(api.discount)
    //         let json = await response.json()
    //         this.setState({discounts:json.data})
    //         alert('test'+JSON.stringify(json.data))
    //     }catch (error) {
    //         alert('error'+error)
    //     }
    // }

    
    render() {
        return (
            <View style={styles.container}>
               <HomeMenuView 
                    menuInfos = {api.menuInfos}
                    onMenuSelected = {(index) => {
                        alert(index)
                    }}
               />
               <View style={{height:14,backgroundColor:color.paper}}></View>
               <View style={styles.gridContaner}> 
                   <HomeGridItem />
                   <HomeGridItem />
                   <HomeGridItem />
                   <HomeGridItem />
                   <HomeGridItem />
                   <HomeGridItem />
               </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    searchBar : {
        flexDirection:'row',
        width:Dimensions.get('window').width*0.7,
        height:30,
        borderRadius: 19,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    searchIcon : {
        width:20 ,
        height:20,
        margin:5,
    },
    gridContaner : {
        flexDirection:'row',
        flexWrap : 'wrap',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderLeftWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
    }

});
export default HomeScene;