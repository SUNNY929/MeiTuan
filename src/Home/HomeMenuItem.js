/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native'

import screen from '../common/screen'

type Props = {
  onPress: Function,
  icon: any,
  title: string,
}

class HomeMenuItem extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress = {this.props.onPress}>
        
        <Image source={this.props.icon} style={styles.icon} />
        
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 5,
    height: screen.width / 5,
  },
  icon: {
    width: screen.width / 9,
    height: screen.width / 9,
    margin: 5,
  }
});


export default HomeMenuItem;
