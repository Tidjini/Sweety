import React, { Component } from "react";

import { Image, Text, View, Dimensions } from "react-native";

//created library and Component
import colors from "../assets/colors";
import { Button } from "./components/common";
import AppIcon from "../assets/icons/icon";

import Wellcome from "./components/scenes/Wellcome";

const { width, height } = Dimensions.get("window");
const background = require("../assets/images/back_01.jpg");

export default class App extends Component {
  render() {
    return <Wellcome />;
  }
}
