/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View,Image, TouchableOpacity ,ViewPropTypes} from 'react-native';

type Props = {
    title?:String,
    titleStyle?: ViewPropTypes.style,
    icon?:any,
    iconStyle?:ViewPropTypes.style,
    onPress?:Function,
}

type State = {

}

class NavigationItem extends PureComponent<Props , State> {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let{title,titleStyle, icon, iconStyle ,onPress} = this.props

        let titleElement = title && (
            <Text style={[styles.title,titleStyle]}>{title}</Text>
        )
        let iconElement = icon && (
            <Image source={icon} style={[styles.icon,iconStyle]} />
        )
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                {titleElement}
                {iconElement}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title : {
        fontSize : 15,
        color:'#333333',
        margin:8,
    },
    icon : {
        width:27,
        height:27,
        margin:8,
    }
})

export default NavigationItem;