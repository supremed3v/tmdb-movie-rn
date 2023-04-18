import { View, Text, FlatList } from "react-native";
import React from "react";

export default function GenreSection({ genre }) {
  const renderItem = ({ item }) => (
    <View className="p-2">
      <View className="bg-indigo-600 rounded-lg shadow-lg p-4">
        <Text className="text-white text-center text-lg font-bold">
          {item.name}
        </Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={genre}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
