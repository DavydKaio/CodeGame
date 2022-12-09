import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OnBoarding3 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-app-BG">
      <View className="flex-1 items-center justify-end h-screen w-52">
        <Text className="text-2xl font-bold text-center w-44 leading-9 text-app-title-color">
          Preparar, apontar...
        </Text>

        <View className="pt-44 w-full">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="flex items-center justify-center w-full h-10 rounded-full bg-app-title-color"
          >
            <Text className="text-base text-white font-semibold">Codar!</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between w-12 pt-32 pb-12">
          <View className="w-2.5 h-2.5 rounded-full bg-app-dot"></View>
          <View className="w-2.5 h-2.5 rounded-full bg-app-dot"></View>
          <View className="w-2.5 h-2.5 rounded-full bg-app-title-color"></View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding3;
