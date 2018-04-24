import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import LinearGradient from "react-native-linear-gradient";

import colors from "../../../assets/colors";

const Header = ({
  primaryIcon,
  secondaryIcon,
  thirdIcon,
  children,
  color,
  size,
  backgroundColor,
  gradientColor,
  gradientColorMiddle,
  gradientColorEnd
}) => {
  const { topBarContainer, logoContainer, leftActionsContainer } = styles;
  return (
    <LinearGradient
      colors={[
        gradientColor || "#FFF",
        gradientColorMiddle || "#FFF",
        gradientColorEnd || "#FFF"
      ]}
      style={{
        height: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: "relative"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          alignItems: "center",
          height: 50,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          elevation: 2,
          position: "relative"
        }}
      >
        <Icon
          name={primaryIcon}
          size={size || 28}
          color={color || colors.blackCoral}
        />
        <View style={logoContainer}>{children}</View>
        <View style={leftActionsContainer}>
          <Icon
            name={secondaryIcon}
            size={size || 28}
            color={color || colors.blackCoral}
          />
          <Icon
            name={thirdIcon}
            size={size || 28}
            color={color || colors.blackCoral}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = {
  logoContainer: {
    alignItems: "center",
    paddingLeft: 20
  },
  leftActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

export { Header };
