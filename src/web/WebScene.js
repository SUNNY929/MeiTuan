/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View , Image} from 'react-native';

type Props = {

}
type State = {

}

class WebScene extends PureComponent< Props , State > {
    constructor(props:Props){
        super(props)
        alert('url --'+this.props.navigation.state.params.url)
    }

    render() {
        return (
        <View style={styles.container}>
            <Text> Web </Text>
        </View>   
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
    
  });
export default WebScene;