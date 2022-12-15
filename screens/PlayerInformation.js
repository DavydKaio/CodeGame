import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

import Player from "../assets/player1.svg";

const PlayerInformation = ({ route }) => {
  const { nome, pontos } = route.params;

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-app-BG pt-14">
      <View className="flex-row items-center pl-5 gap-4">
        <TouchableOpacity onPress={() => navigation.navigate("Score")}>
          <ArrowLeftIcon width={24} height={24} color="#FA5075" />
        </TouchableOpacity>
        <Text className="text-2xl text-app-title-color font-bold">
          Informações do jogador
        </Text>
      </View>

      <View className="mx-10 mt-8 ">
        <View className="flex items-center justify-center border border-app-title-color rounded-lg w-full py-5">
          <View className="relative border-2 border-app-title-color rounded-full py-3 pl-2.5 w-16">
            <Player width={40} height={40} />
            <View className="absolute bg-green-400 w-5 h-5 right-0 rounded-full"></View>
          </View>
          <Text className="text-xs text-white font-bold pt-3">{nome}</Text>

          <View className="flex-row gap-0.5 pt-1">
            <Text className="text-link text-white">Status:</Text>
            <Text className="text-link text-green-400">Online</Text>
          </View>

          <View className="flex-row pt-3 gap-3">
            <View className="flex-col items-center">
              <Text className="text-link text-white">Pontos</Text>
              <Text className="text-link text-app-title-color font-bold">
                {!!pontos ? pontos : 0}
              </Text>
            </View>
            <View className="border-r border-white" />
            <View className="flex-col items-center">
              <Text className="text-link text-white">Nível</Text>
              <Text className="text-link text-app-title-color font-bold">
                2
              </Text>
            </View>
          </View>

          <View className="flex items-center gap-1.5 mt-3 w-48">
            <Text className="text-link font-bold text-app-title-color">
              BIO
            </Text>
            <Text className="text-link text-white text-center">
              Gosto de codar em JS, Python, Go, Java, Ruby, C#, Perl, PHP,
              Swift, R, C++. E só.
            </Text>
          </View>

          <View className="flex-row items-center gap-1 mt-4">
            <StarIcon width={11} height={11} color="#FFD700" />
            <Text className="text-yellow-500 font-bold">Jogador caro</Text>
          </View>
        </View>

        <Text className="text-lg text-app-title-color font-bold mt-5 mb-3">
          Melhores pontuações
        </Text>
        <View className="flex-row gap-2 flex-wrap">
          <Text className="text-white border border-app-title-color rounded-md px-4 py-1.5">
            Bolas
          </Text>
          <Text className="text-white border border-app-title-color rounded-md px-4 py-1.5">
            Caixas
          </Text>
          <Text className="text-white border border-app-title-color rounded-md px-4 py-1.5">
            Aventura
          </Text>
          <Text className="text-white border border-app-title-color rounded-md px-4 py-1.5">
            Anel
          </Text>
          <Text className="text-white border border-app-title-color rounded-md px-4 py-1.5">
            Janela
          </Text>
          <Text className="text-white border border-app-title-color rounded-md px-4 py-1.5">
            Simulação
          </Text>
        </View>

        <Text className="text-lg text-app-title-color font-bold mt-5">
          Melhor linguagem
        </Text>
        <Text className="text-white">Python</Text>
      </View>

      <View className="flex-row items-center justify-between mt-7 mx-7 mb-5">
        <Text className="text-xl text-app-title-color font-bold">
          Partidas Jogadas
        </Text>
        <Text className="text-white">Ver todas</Text>
      </View>

      <View className="mx-7">
        <View className="flex flex-row items-center border rounded-2xl border-app-title-color px-5 relative mb-5">
          <View className="bg-app-title-color rounded-full mb-1 absolute -top-2 left-5 px-2">
            <Text className="text-white text-link pb-0.5">Ganhou!</Text>
          </View>
          <View className="flex flex-col items-center py-3">
            <TouchableOpacity className="flex-col items-center">
              <Player width={28} height={28} color={"#FFF"} />
              <Text className="text-white pt-1">{nome}</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-lg text-app-title-color font-bold mx-3">
            VS
          </Text>

          <View className="flex flex-col items-center">
            <TouchableOpacity className="flex-col items-center">
              <Player width={28} height={28} color={"#FFF"} />
              <Text className="text-white pt-1">Leoni</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-col items-center ml-8">
            <Text className="text-white text-link">Linguagem:</Text>
            <Text className="text-app-title-color font-bold text-link">JS</Text>
          </View>

          <View className="flex flex-col items-center ml-5">
            <Text className="text-white text-link">Nível:</Text>
            <Text className="text-app-title-color font-bold text-link">1</Text>
          </View>

          <View className="flex flex-col items-center ml-5">
            <Text className="text-white text-link">Desafio:</Text>
            <Text className="text-app-title-color font-bold text-link">
              Caixas
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center border rounded-2xl border-app-title-color px-5">
          <View className="bg-app-BG border border-app-title-color rounded-full mb-1 absolute -top-2 left-5 px-2">
            <Text className="text-white text-link pb-0.5">Perdeu</Text>
          </View>
          <View className="flex flex-col items-center py-3">
            <TouchableOpacity className="flex-col items-center">
              <Player width={28} height={28} color={"#FFF"} />
              <Text className="text-white pt-1">{nome}</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-lg text-app-title-color font-bold mx-3">
            VS
          </Text>

          <View className="flex flex-col items-center">
            <TouchableOpacity className="flex-col items-center">
              <Player width={28} height={28} color={"#FFF"} />
              <Text className="text-white pt-1">Leoni</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-col items-center ml-8">
            <Text className="text-white text-link">Linguagem:</Text>
            <Text className="text-app-title-color font-bold text-link">JS</Text>
          </View>

          <View className="flex flex-col items-center ml-5">
            <Text className="text-white text-link">Nível:</Text>
            <Text className="text-app-title-color font-bold text-link">1</Text>
          </View>

          <View className="flex flex-col items-center ml-5">
            <Text className="text-white text-link">Desafio:</Text>
            <Text className="text-app-title-color font-bold text-link">
              Caixas
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerInformation;
