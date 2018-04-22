import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors";

const CircularButton = ({
  onPress,
  color,
  children,
  buttonWidth,
  buttonHeight
}) => {
  const { textStyle } = styles;
  const width = buttonWidth || 100;
  const height = buttonHeight || 50;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width,
        height,
        alignSelf: "stretch",
        backgroundColor: color || colors.rybGreen,
        borderRadius: width,
        borderWidth: 1,
        borderColor: color || colors.rybGreen,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: "relative"
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 5,
    paddingBottom: 10
  }
};

export { CircularButton };
