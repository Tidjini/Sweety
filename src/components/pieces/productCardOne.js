import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
const { width, height } = Dimensions.get('window');
const product = require('../../../assets/products/img_01.jpg');
import colors from '../../../assets/colors';

const productCardOne = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        margin: 10,
        width: width - 100,
        height: 200,
        backgroundColor: colors.sapGreen
      }}
    >
      <Image
        source={product}
        style={{
          width: width - 100,
          height: 200,
          borderRadius: 10,
          resizeMode: 'cover'
        }}
      />
      <View
        style={{
          width: width - 100,
          height: 200,
          borderRadius: 10,
          position: 'absolute',
          backgroundColor: '#00000045',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              backgroundColor: '#FFFFFF80',
              paddingVertical: 2,
              paddingHorizontal: 5,
              fontSize: 12,
              fontWeight: 'bold'
            }}
          >
            560 DA
          </Text>
          <Text
            style={{
              borderRadius: 10,
              backgroundColor: '#FFFFFF80',
              paddingVertical: 2,
              paddingHorizontal: 5,
              fontSize: 12,
              fontWeight: 'bold'
            }}
          >
            Autre details ICI
          </Text>
          <Icon name="heart" size={28} color={'#FFFFFF'} />
        </View>
        <Text
          style={{
            borderRadius: 10,
            color: '#FFFFFF',
            justifyContent: 'space-between',
            margin: 10
          }}
        >
          GATEAUX SEC AVEC SOME OF YOURS
        </Text>
      </View>
    </View>
  );
};

export { productCardOne };
