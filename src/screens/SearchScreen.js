import { View, Text, Pressable } from "react-native";
import React from "react";

export default function SearchScreen({ navigation }) {
  return (
    <View className="bg-slate-800 flex-1 justify-center items-center">
      <Text className="text-white text-lg">
        Please choose a category to get started
      </Text>
    </View>
  );
}
