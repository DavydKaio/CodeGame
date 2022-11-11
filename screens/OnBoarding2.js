import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OnBoarding2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-app-BG">
      <View className="flex-1 items-center justify-end h-screen w-52">
        <Text className="text-2xl font-bold text-center w-48 text-app-title-color">
          Programe contra seus amigos!
        </Text>
        <Text className="text-sm text-app-white text-center w-44 pt-2.5">
          Adicione seus colegas de classe e os desafie.
        </Text>

        <View className="pt-36 w-full">
          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoarding3")}
            className="flex items-center justify-center w-full h-10 rounded-full bg-app-title-color"
          >
            <Text className="text-base text-app-white font-semibold">
              Próximo
            </Text>
          </TouchableOpacity>
        </View>

        <View className="pt-9 pb-16">
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-bold text-sm underline text-app-title-color">
              Pular
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between w-12 pt-9 pb-12">
          <View className="w-2.5 h-2.5 rounded-full bg-app-dot"></View>
          <View className="w-2.5 h-2.5 rounded-full bg-app-title-color"></View>
          <View className="w-2.5 h-2.5 rounded-full bg-app-dot"></View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding2;
