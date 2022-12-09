import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ArrowLeftCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
  SunIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { UserIcon } from "react-native-heroicons/outline";
import { CalendarIcon } from "react-native-heroicons/outline";
import { AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

import Player from "../assets/player1.svg";

const MenuPlayer = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1 bg-app-BG pt-20 px-10">
      <TouchableOpacity
        className="flex flex-row justify-end w-full"
        onPress={() => navigation.navigate("LandingScreen")}
      >
        <XCircleIcon width={26} height={26} color="#FA5075" />
      </TouchableOpacity>

      <View className="flex flex-row items-center mt-8 mb-14">
        <View className="relative border-2 border-app-title-color rounded-full py-3 pl-2.5 w-16">
          <Player width={40} height={40} />
          <View className="absolute bg-app-green w-5 h-5 right-0 rounded-full"></View>
        </View>

        <View className="ml-3">
          <Text className="text-base text-app-title-color font-bold mb-1">
            Ariano Suassuna
          </Text>
          <View className="flex flex-row items-center mb-1">
            <StarIcon width={10} height={10} color="#F4C73E" />
            <Text className="text-link text-app-yellow ml-1">Jogador caro</Text>
          </View>
          <Text className="text-link text-app-green">Online</Text>
        </View>
      </View>

      <TouchableOpacity>
        <View className="flex flex-row items-center">
          <UserIcon width={22} height={22} color="#FA5075" />
          <Text className="text-base text-white ml-5">Meu perfil</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="flex flex-row items-center mt-9">
          <CalendarIcon width={22} height={22} color="#FA5075" />
          <Text className="text-base text-white ml-5">Pontos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="flex flex-row items-center mt-9">
          <AdjustmentsVerticalIcon width={22} height={22} color="#FA5075" />
          <Text className="text-base text-white ml-5">Estatística</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="flex flex-row items-center mt-9">
          <MapPinIcon width={22} height={22} color="#FA5075" />
          <Text className="text-base text-white ml-5">Descobrir Amigos</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="flex flex-row items-center mt-9">
          <ChatBubbleBottomCenterTextIcon
            width={22}
            height={22}
            color="#FA5075"
          />
          <Text className="text-base text-white ml-5">Chat</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="flex flex-row items-center mt-9">
          <SunIcon width={22} height={22} color="#FA5075" />
          <View>
            <Text className="text-base text-white ml-5">
              Mudar para tema claro
            </Text>
            <Text className="ml-5 text-link text-app-gray">
              Você será julgado (a)
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex flex-row justify-center w-full mt-20"
        onPress={() => navigation.navigate("Login")}
      >
        <View className="flex flex-row items-center mt-9">
          <ArrowLeftCircleIcon width={22} height={22} color="#FA5075" />
          <Text className="text-base text-white ml-5">Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuPlayer;
