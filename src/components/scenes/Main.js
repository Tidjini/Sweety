import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Header } from '../common';
import { productCardOne } from '../pieces/productCardOne';
import colors from '../../../assets/colors';

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#CCCCCC' }}>
        <Header primaryIcon="navicon" secondaryIcon="search" thirdIcon="heart">
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: colors.darkGunmetal
              }}
            >
              Sweety
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: colors.darkGunmetal
              }}
            >
              1589 GATEAUX
            </Text>
          </View>
        </Header>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              paddingTop: 16,
              paddingLeft: 16,
              color: colors.darkGunmetal
            }}
          >
            Most Rated
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              paddingTop: 16,
              paddingRight: 16,
              color: colors.sapGreen
            }}
          >
            View all
          </Text>
        </View>
        <productCardOne />
      </View>
    );
  }
}
