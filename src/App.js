import React, { Component } from "react";

import { Image, Text, View, Dimensions } from "react-native";
import AppIcon from "../assets/icons/icon";

const { width, height } = Dimensions.get("window");
const background = require("../assets/images/back_01.jpg");

export default class App extends Component {
  render() {
    return (
      <View>
        <Image
          source={background}
          style={{ width, height, resizeMode: "cover" }}
        />
        <View
          style={{
            width,
            height,
            backgroundColor: "#FFFFFFAA",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AppIcon />
        </View>
      </View>
    );
  }
}
