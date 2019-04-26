/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import screen from '../common/screen'
import color from '../widget/color'

type Props = {
    title: Array<string>,
    selectedIndex: number,
    onSelected: Function,
}
type State = {

}


class NearbyHeaderView extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let {titles,selectedIndex,onSelected} =this.props 
        return (
            <View style={styles.container}>
                {titles.map((title, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => {
                            this.props.onSelected(i)
                        }}
                        style={[styles.item,{backgroundColor: selectedIndex == i ? '#fe566d':'white'}]}
                    >
                        <Text 
                        style={{ fontSize: 13, color: selectedIndex == i? 'white':'#555555' }}
                        >
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        flexWrap:'wrap',
    },
    item : {
        width:screen.width / 4 -10 ,
        marginLeft:8,
        marginTop: 5,
        marginBottom:5,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:color.border,
    }

})

export default NearbyHeaderView;