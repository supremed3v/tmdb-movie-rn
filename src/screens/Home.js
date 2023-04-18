import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View className="bg-slate-800 flex-1 justify-center items-center">
      <Text className="text-white text-lg">
        Please choose a category to get started
      </Text>
      <View className="flex flex-row ">
        <Pressable
          className="flex-1 p-4"
          onPress={() => navigation.navigate("Movies")}
        >
          <View className="bg-indigo-600 rounded-lg shadow-lg p-4">
            <Text className="text-white text-center text-lg font-bold">
              Movies
            </Text>
            <Text className="text-white text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              blandit ante euismod, blandit turpis in, auctor mi.
            </Text>
          </View>
        </Pressable>
        <Pressable
          className="flex-1 p-4"
          onPress={() => navigation.navigate("Seasons")}
        >
          <View className="bg-pink-600 rounded-lg shadow-lg p-4">
            <Text className="text-white text-center text-lg font-bold">
              Seasons
            </Text>
            <Text className="text-white text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              blandit ante euismod, blandit turpis in, auctor mi.
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
