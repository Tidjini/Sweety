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
          height: 120,
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
            fontWeight: "bold",
            color: colors.sapGreen
          }}
        >
          {price}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: colors.redOrange
            }}
          >
            {autre}
          </Text>
          <Icon name="heart" size={18} color={colors.redOrange} />
        </View>
      </View>
    </View>
  );
};
