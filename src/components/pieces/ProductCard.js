import React from "react";

import { View, Text, Image, Dimensions } from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";
const { width, height } = Dimensions.get("window");
import colors from "../../../assets/colors";

const CARD_HEIGHT = 200;
const CARD_WIDTH = width / 2 - 20;

export default ({ price, autre, image, title }) => {
  return (
    <View
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        shadowColor: "#D6EBC4",
        borderRadius: 10,

        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: "relative",
        marginTop: 10,
        backgroundColor: "#fff"
      }}
    >
      <Image
        source={image}
        style={{
          height: 130,
          width: CARD_WIDTH,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          resizeMode: "cover"
        }}
      />
      <Text
        style={{
          marginTop: 5,
          marginLeft: 10,
          marginRight: 10,
          fontSize: 14,
          fontWeight: "bold",
          color: colors.darkGunmetal
        }}
      >
        {title}
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <Text
          style={{
            marginLeft: 5,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.blackCoral_11,
            backgroundColor: "#FFF",
            paddingVertical: 2,
            paddingHorizontal: 5,
            fontSize: 9,
            color: colors.blackCoral,
            fontWeight: "bold"
          }}
        >
          1 jour
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
    </View>
  );
};
