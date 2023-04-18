import { Pressable, View, BackHandler, Alert, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          marginTop: 20,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            // backgroundColor: "rgba(0, 0, 0, 0.3)",
            backgroundColor: "gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
        </Pressable>
        <Text
          className="text-white text-center font-700 text-xl overflow-hidden overflow-ellipsis"
          style={{ maxWidth: "80%" }}
        >
          {title}
        </Text>
        <View />
      </View>
    </>
  );
}
