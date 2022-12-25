import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeftIcon } from "react-native-heroicons/outline";
import Player from "../assets/player1.svg";
import Duel from "./Duel";

const ChooseOponent = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-app-BG px-5 pt-16">
      <TouchableOpacity
        className="pl-2"
        onPress={() => navigation.navigate("Duel")}
      >
        <ArrowLeftIcon width={18} height={18} color="#fff" />
      </TouchableOpacity>

      <View className="flex items-center justify-center pt-8">
        <Image
          source={require("D:/Users/davyd/www/ESDM/CodeGame/assets/sword.png")}
          className="w-52 h-80"
        />

        <Text className="text-white text-3xl font-black pt-8">
          Hora de Duelar!
        </Text>
        <Text className="text-white font-semibold pt-4">
          Escolha seu oponente
        </Text>
      </View>

      <View className="flex-row flex-wrap items-center justify-center gap-6 pt-10">
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-2">
          <Player width={50} height={50} />
          <Text className="font-bold text-white">Jogador</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ExercisesDuel")}
        className="flex mt-8 mx-16 py-2 rounded-full items-center justify-center bg-app-title-color"
      >
        <Text className="text-white font-bold">And... FIGHT!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseOponent;
