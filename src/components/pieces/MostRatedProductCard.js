import React from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 170;
import colors from "../../../assets/colors";

export default ({ price, autre, image, title }) => {
  return (
    <View
      style={{
        borderRadius: 10,
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
          borderRadius: 10,
          resizeMode: "cover"
        }}
      />
      <View
        style={{
          width: width - 100,
          height: CARD_HEIGHT,
          borderRadius: 10,
          position: "absolute",
          backgroundColor: "#D6EBC433",
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
          <Text
            style={{
              borderRadius: 10,
              backgroundColor: "#FFFFFF80",
              paddingVertical: 2,
              paddingHorizontal: 5,
              color: colors.darkGunmetal,
              fontSize: 12,

              fontWeight: "bold"
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              borderRadius: 10,
              backgroundColor: "#FFFFFF80",
              paddingVertical: 2,
              paddingHorizontal: 5,
              fontSize: 12,
              color: colors.darkGunmetal,
              fontWeight: "bold"
            }}
          >
            {autre}
          </Text>
          <Icon name="heart" size={28} color={"#FFFFFF"} />
        </View>
        <Text
          style={{
            borderRadius: 10,
            fontWeight: "bold",
            color: colors.darkGunmetal,
            justifyContent: "space-between",
            margin: 10
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
