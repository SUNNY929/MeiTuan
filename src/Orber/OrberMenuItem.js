/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import {Heading3} from '../widget/Text'
import screen from '../common/screen'


type Props = {
    onPress:Function,
    icon:any,
    title:string,
}
type State = {

}


class OrberMenuItem extends PureComponent<Props,State> {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let{onPress,icon,title} = this.props
        return (

            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={icon} resizeMode='contain' style={styles.icon} />
                <Heading3>{title}</Heading3>
            </TouchableOpacity>
        );
    }
}
 
const styles = StyleSheet.create ({
    container : {
        justifyContent:'center',
        alignItems:'center',
        width:screen.width/4,
        height:screen.width/4,
    },
    icon : {
        width:30,
        height:30,
        margin:5,
    }
})

export default OrberMenuItem;