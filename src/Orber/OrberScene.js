/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {Image, StyleSheet,StatusBar, Text, View} from 'react-native';
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import color from '../widget/color';
import {Heading2} from '../widget/Text'
import DetailCell from '../widget/DetailCell'
import OrberMenuItem from './OrberMenuItem'
import SpacingView from '../widget/SpacingView'
import api from '../api'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {
    navigation: any,
}
type State = {
    data: Array<Object>,
    refreshState: number,
}
class OrberScene extends PureComponent<Props,State> {
    static navigationOptions = ({navigation}: any) => ({
        title:'订单',
        headerStyle: { backgroundColor: 'white' },
    })

    constructor(props: Props) {
        super(props)
    
        this.state = {
          data: [],
          refreshState: RefreshState.Idle,
        }
      }
    
      componentDidMount() {
        this.requestData()
      }
    
      requestData = async () => {
        try {
          this.setState({ refreshState: RefreshState.HeaderRefreshing })
    
          let response = await fetch(api.recommend)
          let json = await response.json()
    
          console.log(JSON.stringify(json))
    
          let dataList = json.data.map((info) => {
            return {
              id: info.id,
              imageUrl: info.squareimgurl,
              title: info.mname,
              subtitle: `[${info.range}]${info.title}`,
              price: info.price
            }
          })
    
          dataList.sort(() => { return 0.5 - Math.random() })
    
          this.setState({
            data: dataList,
            refreshState: RefreshState.NoMoreData,
          })
        } catch (error) {
          this.setState({
            refreshState: RefreshState.Failure,
          })
        }
      }
    
      keyExtractor = (item: Object, index: number) => {
        return item.id.toString()
      }
    
    renderHeader = ()=> {
        return (
            <View>
                <DetailCell 
                    title='我的订单'
                    subtitle='全部订单'
                    style={{height:38}}
                />
                <View style={styles.itemContainer}>
                    <OrberMenuItem 
                        title='待付款'
                        icon={require('../img/order/order_tab_need_pay.png')} 
                    />
                    <OrberMenuItem 
                        title='待使用'
                        icon={require('../img/order/order_tab_need_use.png')} 
                    />
                    <OrberMenuItem 
                        title='待评价'
                        icon={require('../img/order/order_tab_need_review.png')} 
                    />
                    <OrberMenuItem 
                        title='退款/售后'
                        icon={require('../img/order/order_tab_needoffer_aftersale.png')} 
                    />
                </View>
                <SpacingView />
                <DetailCell 
                    title='我的收藏'
                    subtitle='查看收藏'
                    style={{height:38}}
                />
            </View>
        )
    }

  renderCell = (rowData: any) => {
    return (
      <GroupPurchaseCell
        info={rowData.item}
        onPress={() => {
          StatusBar.setBarStyle('default', false)
          this.props.navigation.navigate('GroupPurchase', { info: rowData.item })
        }}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <RefreshListView
          data={this.state.data}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderCell}
          keyExtractor={this.keyExtractor}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.requestData}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemContainer : {
        flexDirection:'row'
    }
  });
export default OrberScene;