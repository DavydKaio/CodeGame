import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "react-native-heroicons/outline";

import Player from "../assets/player1.svg";

const Score = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-app-BG">
      <View className="flex flex-row items-center px-5 pt-7 w-full bg-app-title-color h-24">
        <TouchableOpacity onPress={() => navigation.navigate("LandingScreen")}>
          <ArrowLeftIcon width={17} height={17} color="#FFF" />
        </TouchableOpacity>
        <Text className="text-2xl pl-3 font-bold text-white">
          Ranking da turma
        </Text>
      </View>

      <View className="w-full px-5">
        <View className="flex flex-row items-center rounded-full py-1 pl-4 mt-7 border border-app-title-color">
          <MagnifyingGlassIcon width={24} height={24} color="#FA5075" />
          <TextInput
            className="pl-4 text-white"
            placeholder="Procurar usuário..."
            placeholderTextColor={"#808080"}
          />
        </View>
      </View>

      <View className="flex-row items-center justify-between my-7 px-5">
        <Text className="text-lg font-bold text-white">APC - 2022.1</Text>
        <TouchableOpacity>
          <Text className="text-link underline text-white">Mudar turma</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-col gap-2.5 px-5">
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleUpIcon width={14} height={14} color="#0F0" />
              <Text className="text-lg font-bold text-app-title-color">#1</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Ana Carolina</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              352
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-white bg-app-BG-Selected rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleUpIcon width={14} height={14} color="#0F0" />
              <Text className="text-lg font-bold text-app-title-color">#2</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Você</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              352
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleDownIcon width={14} height={14} color="#F00" />
              <Text className="text-lg font-bold text-app-title-color">#3</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Leoni</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              350
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleUpIcon width={14} height={14} color="#0F0" />
              <Text className="text-lg font-bold text-app-title-color">4</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Alan Lins</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              299
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleDownIcon width={14} height={14} color="#F00" />
              <Text className="text-lg font-bold text-app-title-color">5</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Paulo Franco</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              250
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleUpIcon width={14} height={14} color="#0F0" />
              <Text className="text-lg font-bold text-app-title-color">6</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Di Ferrero</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              240
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleUpIcon width={14} height={14} color="#0F0" />
              <Text className="text-lg font-bold text-app-title-color">7</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Cássia</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">
              100
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between px-5 items-center h-16 border border-app-title-color rounded-lg">
          <View className="flex-row gap-4">
            <View className="flex items-center">
              <ChevronDoubleUpIcon width={14} height={14} color="#F00" />
              <Text className="text-lg font-bold text-app-title-color">8</Text>
            </View>
            <View className="flex flex-row items-center mr-4">
              <Player width={30} height={30} />
              <Text className="font-bold text-white ml-2">Adriana</Text>
            </View>
          </View>
          <View className="flex items-center">
            <Text className="text-link text-white">Pontuação</Text>
            <Text className="text-link font-bold text-app-title-color">99</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Score;
