import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Text, View, Dimensions } from "react-native";
import { main } from "../../actions";

//created library and Component
import colors from "../../../assets/colors";
import { Button } from "../common";
import AppIcon from "../../../assets/icons/icon";

const { width, height } = Dimensions.get("window");
const background = require("../../../assets/images/back_01.jpg");

class Wellcome extends Component {
  onExplore() {
    this.props.main();
  }

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
          <Text style={description}>
            The future of sweets{"\n"} production and shopping
          </Text>
          <View style={buttons}>
            <Button buttonWidth={width - 200} buttonHeight={35}>
              <Text>SIGN IN</Text>
            </Button>
            <Button
              color={"#FFFFFF"}
              buttonWidth={width - 200}
              buttonHeight={35}
              onPress={this.onExplore.bind(this)}
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
    marginTop: 30
  },
  description: { color: colors.darkGunmetal, textAlign: "center" },
  buttons: { marginTop: 30 }
};

export default connect(null, { main })(Wellcome);
