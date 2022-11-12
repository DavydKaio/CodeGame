import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

import Player from "../assets/player1.svg";

const Duel = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1 bg-app-BG pt-16 px-5">
      <TouchableOpacity onPress={() => navigation.navigate("LandingScreen")}>
        <ArrowLeftIcon width={26} height={26} color="#FA5075" />
      </TouchableOpacity>

      <View className="flex flex-col items-center w-full mt-32">
        <Text className="text-xl2 font-black text-app-title-color mb-2">
          Escolha a modalidade
        </Text>
        <Text className="text-app-white font-semibold">
          Sozinho ou com amigos, o que vale é codar
        </Text>
      </View>

      <View className="flex flex-row w-full items-center justify-evenly mt-20">
        <TouchableOpacity>
          <View className="flex items-center justify-center bg-app-title-color w-36 h-40 rounded-lg">
            <Player width={80} height={80} fill="#FFF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex flex-row items-center justify-evenly bg-app-title-color w-36 h-40 rounded-lg">
            <Player width={50} height={50} fill="#FFF" />
            <Player width={50} height={50} fill="#FFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Duel;
