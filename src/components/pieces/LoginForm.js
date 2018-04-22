import React from "react";
import { View, Text } from "react-native";

import { OutlineButton, Input } from "../common";

export default () => {
  return (
    <View>
      <Text>Email ou Tél</Text>
      <Input />
      <Text>Password</Text>
      <Input secureTextEntry />
    </View>
  );
};
