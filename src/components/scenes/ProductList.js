import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ListView
} from "react-native";

import { Header, OutlineButton } from "../common";
import AllProductList from "../pieces/AllProductList";
import colors from "../../../assets/colors";
const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 20;
const CARD_HEIGHT = (height - 20) / 6;
const product = require("../../../assets/products/img_25.jpg");

export default class ProductList extends Component {
  render() {
    const { headerTitle, headerTitlePrimary, headerTitleSecondary } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Header
          primaryIcon="navicon"
          secondaryIcon="search"
          thirdIcon="gear"
          gradientColor={"#FFF"}
          gradientColorMiddle={"#FFF"}
          gradientColorEnd={"#FFF"}
        >
          <View style={headerTitle}>
            <Text style={headerTitlePrimary}>List des gateaux</Text>
            <Text style={headerTitleSecondary}>1589 GATEAUX</Text>
          </View>
        </Header>

        <AllProductList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: { alignItems: "center" },
  headerTitlePrimary: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkGunmetal
  },
  headerTitleSecondary: {
    fontSize: 10,
    color: colors.darkGunmetal
  }
});
