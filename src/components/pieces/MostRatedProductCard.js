import React, { Component } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import LinearGradient from "react-native-linear-gradient";
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 170;
import colors from "../../../assets/colors";

export default class MostRatedProductCard extends Component {
  onItemPressed = () => {
    console.log("Card pressed", this.props.id);
    this.props.onPressItem(this.props.id);
  };
  render() {
    const { price, autre, image, title, onPress } = this.props;
    return (
      <TouchableOpacity onPress={this.onItemPressed}>
        <View
          style={{
            borderRadius: 7,
            margin: 10,
            width: width - 100,
            height: CARD_HEIGHT,
            backgroundColor: "#fff"
          }}
        >
          <Image
            source={image}
            style={{
              width: width - 100,
              height: CARD_HEIGHT,
              borderRadius: 7,
              resizeMode: "cover"
            }}
          />
          <View
            style={{
              width: width - 100,
              height: CARD_HEIGHT,
              borderRadius: 10,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    borderRadius: 15,
                    backgroundColor: "#FFFFFF",
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    color: colors.darkGunmetal,
                    fontSize: 10,
                    fontWeight: "bold"
                  }}
                >
                  {price} DA
                </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    borderRadius: 10,
                    backgroundColor: colors.teaGreen,
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    fontSize: 10,
                    color: colors.sapGreen,
                    fontWeight: "bold"
                  }}
                >
                  {autre}
                </Text>
              </View>

              <Icon name="heart" size={28} color={"#FFFFFF"} />
            </View>
            <LinearGradient
              colors={["#00000000", "#00000030", "#00000060"]}
              style={{
                height: 50
              }}
            >
              <Text
                style={{
                  borderRadius: 10,
                  fontWeight: "bold",
                  color: "#FFF",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 20,
                  marginLeft: 10
                }}
              >
                {title}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
