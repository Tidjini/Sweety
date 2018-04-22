import React, { Component } from "react";
import { Text, View, Dimensions, Image } from "react-native";

import { Header } from "../common";
import colors from "../../../assets/colors";

export default class Main extends Component {
  render() {
    return (
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
    );
  }
}
