import React, { Component } from "react";
import { Text, ScrollView, View, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { Header } from "../common";
import colors from "../../../assets/colors";
import MostRatedProductList from "../pieces/MostRatedProductList";
import ProductList from "../pieces/ProductList";

const { width, height } = Dimensions.get("window");

export default class Main extends Component {
  render() {
    return (
      <View>
        <Header primaryIcon="navicon" secondaryIcon="search" thirdIcon="heart">
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
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
        <ScrollView style={{ backgroundColor: "#CCCCCC00" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
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
                fontWeight: "bold",
                paddingTop: 16,
                paddingRight: 16,
                color: colors.sapGreen
              }}
            >
              View all
            </Text>
          </View>
          <MostRatedProductList />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingTop: 16,
              paddingLeft: 16,
              color: colors.darkGunmetal
            }}
          >
            Browse All product
          </Text>
          <ProductList />
        </ScrollView>
      </View>
    );
  }
}
