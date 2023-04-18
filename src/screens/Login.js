import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    navigation.navigate("HomeStack");
  };

  return (
    <View className="bg-slate-800 flex-1">
      <Text className="text-white text-center pt-14">Login</Text>
      <View className="flex-1 justify-center items-center">
        <TextInput
          className="bg-white rounded-full w-3/4 h-12 px-4 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="bg-white rounded-full w-3/4 h-12 px-4 mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="bg-white rounded-full w-3/4 h-12 px-4 mb-4 items-center justify-center"
          onPress={handleLogin}
        >
          <Text className="text-center">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white rounded-full w-3/4 h-12 px-4 mb-4 items-center justify-center"
          onPress={handleLogin}
        >
          <Text className="text-center">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
