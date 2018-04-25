import React, { Component } from "react";

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import { OutlineButton } from "../common";
import colors from "../../../assets/colors";
const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 20;
const CARD_HEIGHT = (height - 20) / 6;

export default ({
  price,
  image,
  title,
  shortDecription,
  onPressCommander,
  onPressFavorie
}) => {
  return (
    <View
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 5,
        shadowColor: "#000000AA",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        elevation: 2,
        alignSelf: "center",
        position: "relative",
        flexDirection: "row",
        marginTop: 5
      }}
    >
      <View
        style={{
          width: CARD_HEIGHT,
          height: CARD_HEIGHT,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          position: "relative"
        }}
      >
        <Text
          style={{
            margin: 5,
            position: "absolute",
            elevation: 2,

            color: colors.rybGreen,
            backgroundColor: colors.teaGreen,
            paddingVertical: 3,
            paddingHorizontal: 7,
            borderRadius: 10,
            fontSize: 10,
            fontWeight: "bold"
          }}
        >
          {price}
        </Text>

        <Image
          source={image}
          style={{
            width: CARD_HEIGHT,
            height: CARD_HEIGHT,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            resizeMode: "cover"
          }}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: colors.darkGunmetal
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.blackCoral
          }}
        >
          {shortDecription}
        </Text>
        <View style={{ flexDirection: "row", marginLeft: -10, marginTop: 5 }}>
          <OutlineButton>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.sapGreen
              }}
            >
              Commander
            </Text>
          </OutlineButton>
          <OutlineButton>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.blackCoral
              }}
            >
              Favorie
            </Text>
          </OutlineButton>
        </View>
      </View>
    </View>
  );
};
