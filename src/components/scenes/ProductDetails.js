import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

import { Header } from "../common";
import colors from "../../../assets/colors";
const product = require("../../../assets/products/img_25.jpg");
const { width, height } = Dimensions.get("window");

export default class ProductDetails extends Component {
  render() {
    const { headerTitle, headerTitlePrimary, headerTitleSecondary } = styles;
    return (
      <View
        style={{
          width,
          height
        }}
      >
        <Image
          source={product}
          style={{ width, height: height - 200, resizeMode: "cover" }}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "space-between",
            width,
            height
          }}
        >
          <Header
            primaryIcon="arrow-left"
            secondaryIcon="search"
            thirdIcon="share-google"
          />
          <View
            style={{
              width: width - 30,
              height: 300,
              alignSelf: "center",
              backgroundColor: "#FFF"
            }}
          />
        </View>
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
