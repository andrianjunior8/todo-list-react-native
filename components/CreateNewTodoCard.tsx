import { View, Text, Pressable } from "react-native";
import React from "react";

const CreateNewTodoCard = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#7EACB5",
        borderColor: "#D2E0FB",
        borderWidth: 1,
        minHeight: 40,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          padding: 10,
          color: "#FEF9D9",
        }}
      >
        Create New Task
      </Text>
    </View>
  );
};

export default CreateNewTodoCard;
