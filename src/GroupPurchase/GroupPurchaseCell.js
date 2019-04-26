/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import screen from '../common/screen'
import color from '../widget/color'

let count = 0

type Props = {
  info: Object,
  onPress: Function,
}


class GroupPurchaseCell extends PureComponent<Props> {

  render() {
    let { info } = this.props
    let imageUrl = info.imageUrl.replace('w.h', '160.0')
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
        <Image source={{ uri: imageUrl }} style={styles.icon} />

        <View style={styles.rightContainer}>
          <Text style={{fontSize: 15,fontWeight: 'bold',color: '#222222',}}>{info.title}</Text>
          <Text numberOfLines={0} style={{ marginTop: 8,fontSize: 13,color: '#777777', }}>{info.subtitle}</Text>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.price,{fontSize: 15,fontWeight: 'bold',color: '#222222',}]}>{info.price}元</Text>
          </View>

        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: screen.onePixel,
    borderColor: color.border,
    backgroundColor: 'white',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
  },
  price: {
    color: color.primary
  }
})


export default GroupPurchaseCell
