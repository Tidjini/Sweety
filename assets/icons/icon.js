import React from "react";

import { View, Image } from "react-native";
import colors from "../colors";
const icon = require("./app_icon_white.png");

export default ({ iconWidth, iconHeight }) => {
  const width = iconWidth || 56;
  const height = iconHeight || 56;
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: colors.sapGreen,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.sapGreen,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: "relative"
      }}
    >
      <Image
        style={{
          width: width - 12,
          height: height - 16,
          resizeMode: "contain"
        }}
        source={icon}
      />
    </View>
  );
};
