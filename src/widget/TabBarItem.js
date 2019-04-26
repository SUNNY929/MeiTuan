/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

type Props = {
    normalImage: any,
    selectedImage : any ,
    focused: Boolean,
    tintColor : any ,
}
type State = {

}

class TabBarItem extends PureComponent<Props, State> {

    render() {
        let{normalImage,selectedImage,focused,tintColor} = this.props
        return (
            <Image 
                source = {focused ? selectedImage : normalImage}
                style = {{ width:25, height:25, tintColor:tintColor }}
            />
        )
    }
}

export default TabBarItem;