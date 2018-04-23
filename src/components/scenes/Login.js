import React, { Component } from "react";

import { Image, Text, View, Dimensions, TextInput } from "react-native";

//created library and Component
import colors from "../../../assets/colors";
import { Button, Input, OutlineButton, CircularButton } from "../common";
import AppIcon from "../../../assets/icons/icon";

const { width, height } = Dimensions.get("window");
const background = require("../../../assets/images/back_01.jpg");
const google = require("../../../assets/icons/google.png");
const facebook = require("../../../assets/icons/facebook.png");

export default class Login extends Component {
  render() {
    const {
      backImage,
      container,
      title,
      wellcome,
      description,
      buttons,
      circularButtonsContainer,
      circularButtonImage
    } = styles;
    return (
      <View>
        <Image source={background} style={backImage} />
        <View style={container}>
          <AppIcon />
          <Text style={title}>Sweety</Text>

          <Text style={wellcome}>Wellcome to Sweety</Text>
          <Text style={description}>Log in to conutinue</Text>
          <View style={{ height: 80, width: width - 100, marginTop: 30 }}>
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
              Email ou Tél
            </Text>
            <TextInput style={{ marginTop: -7 }} />
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>Password</Text>
            <TextInput style={{ marginTop: -7 }} />
          </View>
          <View style={buttons}>
            <Button buttonWidth={width - 200} buttonHeight={35}>
              <Text>SIGN IN</Text>
            </Button>
          </View>
          <View style={circularButtonsContainer}>
            <CircularButton
              buttonWidth={48}
              buttonHeight={48}
              color={"#FFFFFF"}
            >
              <Image source={google} style={circularButtonImage} />
            </CircularButton>
            <CircularButton
              buttonWidth={48}
              buttonHeight={48}
              color={"#FFFFFF"}
            >
              <Image source={facebook} style={circularButtonImage} />
            </CircularButton>
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
  buttons: { marginTop: 30 },
  circularButtonsContainer: { flexDirection: "row" },
  circularButtonImage: {
    width: 26,
    height: 26,
    resizeMode: "cover",
    marginTop: 10,
    marginLeft: 10
  }
};
