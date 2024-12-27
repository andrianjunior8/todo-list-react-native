import { View, Text } from "react-native";
import React from "react";

const UnDoneCard = (props: { name: string }) => {
  return (
    <View
      style={{
        backgroundColor: "#7EACB5",
        borderRadius: 8,
        minHeight: 40,
        flexDirection: "row",
        borderColor: "#D2E0FB",
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          padding: 10,
          color: "#FEF9D9",
        }}
      >
        {props.name}
      </Text>
    </View>
  );
};

export default UnDoneCard;
