import React, { Component } from "react";

import { Image, Text, View, Dimensions } from "react-native";

//created library and Component
import colors from "../../../assets/colors";
import { Button } from "../common";
import AppIcon from "../../../assets/icons/icon";

const { width, height } = Dimensions.get("window");
const background = require("../../../assets/images/back_01.jpg");

export default class Wellcome extends Component {
  render() {
    const {
      backImage,
      container,
      title,
      wellcome,
      description,
      buttons
    } = styles;
    return (
      <View>
        <Image source={background} style={backImage} />
        <View style={container}>
          <AppIcon />
          <Text style={title}>Sweety</Text>

          <Text style={wellcome}>Wellcome to Sweety</Text>
          <Text style={description}>Log in to conutinue</Text>
          <View style={buttons}>
            <Button buttonWidth={width - 200} buttonHeight={35}>
              <Text>SIGN IN</Text>
            </Button>
            <Button
              color={"#FFFFFF"}
              buttonWidth={width - 200}
              buttonHeight={35}
            >
              <Text style={{ color: colors.rybGreen }}>EXPLORE</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  backImage: { width, height, resizeMode: "cover" },
  container: {
    width,
    height,
    backgroundColor: "#FFFFFFAA",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: colors.sapGreen,
    fontWeight: "bold",
    fontSize: 26
  },
  wellcome: {
    color: colors.darkGunmetal,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20
  },
  description: { color: colors.darkGunmetal, textAlign: "center" },
  buttons: { marginTop: 30 }
};
