/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View,Image , TouchableOpacity} from 'react-native';
import sceen from '../common/screen'
import color from '../widget/color';

type Props = {
    info:Object,
}
type State = { 

}


class HomeGridItem extends PureComponent<Props,State> {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        // let {info} = this.props

        // let title = info.maintitle
        // let color = infotype_color

        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <Text style={{fontSize:15,color:'red',marginBottom:10}}>吃吃喝喝</Text>
                    <Text style={{fontSize:15,color:'#333'}}>年底聚会</Text>
                </View>
                <Image style={styles.icon} />
            </TouchableOpacity>
        );
    }
}
 
const styles = StyleSheet.create ({
    container : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        width:sceen.width / 2 - StyleSheet.hairlineWidth,
        height:sceen.width / 4,
        backgroundColor : 'white',
        borderRightWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
    },
    icon : {
        width:sceen.width / 5,
        height:sceen.width / 5,
        backgroundColor:'blue',
        marginLeft : 10 ,

    }
})

export default HomeGridItem;