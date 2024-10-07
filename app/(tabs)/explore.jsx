import { View, Text } from "react-native";
import React from "react";

export default function explore() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "grotesque-bold", fontSize: 40 }}>
        explore
      </Text>
    </View>
  );
}
