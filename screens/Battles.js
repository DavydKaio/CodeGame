import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

import Player from "../assets/player1.svg";

const Battles = () => {
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
          Desafie a Galera
        </Text>
      </View>

      <View className="w-full px-5">
        <View className="flex flex-row items-center rounded-full py-1 pl-4 mt-7 border border-app-title-color">
          <MagnifyingGlassIcon width={24} height={24} color="#FA5075" />
          <TextInput
            className="pl-4"
            placeholder="Procurar usuário..."
            placeholderTextColor={"#808080"}
          />
        </View>

        <View className="flex flex-row items-center justify-between px-3 mt-24 mb-6">
          <Text className="font-bold text-app-title-color">
            Batalhas em andamento
          </Text>
          <TouchableOpacity>
            <View className="flex flex-row items-center">
              <Text className="text-link text-white pr-2">Ver Todas</Text>
              <ArrowRightIcon width={12} heigh={12} color={"#FA5075"} />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center border rounded-2xl border-app-title-color px-5">
          <View className="flex flex-col items-center py-3">
            <View className="bg-app-title-color rounded-full px-0.5 mb-1">
              <Text className="text-white text-link pb-0.5">Ganhando</Text>
            </View>
            <TouchableOpacity className="flex-col items-center">
              <Player width={38} height={38} color={"#FFF"} />
              <Text className="text-white pt-1">Ana</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-lg text-app-title-color font-bold mx-3">
            VS
          </Text>

          <View className="flex flex-col items-center pt-4">
            <TouchableOpacity className="flex-col items-center">
              <Player width={38} height={38} color={"#FFF"} />
              <Text className="text-white pt-1">Leoni</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-col items-center ml-8">
            <Text className="text-white text-link">Linguagem:</Text>
            <Text className="text-app-title-color font-bold text-link">
              Python
            </Text>
          </View>

          <View className="flex flex-col items-center ml-5">
            <Text className="text-white text-link">Nível:</Text>
            <Text className="text-app-title-color font-bold text-link">3</Text>
          </View>

          <View className="flex flex-col items-center ml-5">
            <Text className="text-white text-link">Desafio:</Text>
            <Text className="text-app-title-color font-bold text-link">
              Cores
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center border rounded-2xl border-app-title-color px-5 mt-5">
          <View className="flex flex-col items-center pt-4">
            <TouchableOpacity className="flex-col items-center">
              <Player width={38} height={38} color={"#FFF"} />
              <Text className="text-white pt-1">Alan</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-lg text-app-title-color font-bold mx-3">
            VS
          </Text>

          <View className="flex flex-col items-center py-3">
            <View className="bg-app-title-color rounded-full px-0.5 mb-1">
              <Text className="text-white text-link pb-0.5">Ganhando</Text>
            </View>
            <TouchableOpacity className="flex-col items-center">
              <Player width={38} height={38} color={"#FFF"} />
              <Text className="text-white pt-1">Paulo</Text>
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

      <View className="w-full px-5">
        <View className="flex flex-row items-center justify-between px-3 mt-12 mb-6">
          <Text className="font-bold text-app-title-color">Top jogadores</Text>
          <TouchableOpacity>
            <View className="flex flex-row items-center">
              <Text className="text-link text-white pr-2">Ver Todas</Text>
              <ArrowRightIcon width={12} heigh={12} color={"#FA5075"} />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-around">
          <View className="flex-row items-center border border-app-title-color py-4 px-6 rounded-2xl">
            <View className="pr-3">
              <Player width={38} height={38} color={"#FFF"} />
            </View>
            <View className="flex gap-y-0.5">
              <Text className="text-white text-minimo font-bold">Djavan</Text>
              <View className="flex-row items-center">
                <StarIcon width={10} height={10} color="#daa520"></StarIcon>
                <Text className="text-app-dourado pl-1 text-minimo">
                  Jogador caro
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-white text-minimo">Status:</Text>
                <Text className="text-app-green pl-1 text-minimo">Online</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-white text-minimo">Linguagens:</Text>
                <Text className="text-app-title-color pl-1 text-minimo">
                  Python, Go
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center border border-app-title-color py-4 px-6 rounded-2xl">
            <View className="pr-3">
              <Player width={38} height={38} color={"#FFF"} />
            </View>
            <View className="flex gap-y-0.5">
              <Text className="text-white text-minimo font-bold">Tim Maia</Text>
              <View className="flex-row items-center">
                <StarIcon width={12} height={12} color="#C0C0C0"></StarIcon>
                <Text className="text-app-prata pl-1 text-minimo">
                  Jogador caro
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-white text-minimo">Status:</Text>
                <Text className="text-orange-500 pl-1 text-minimo">
                  Ausente
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-white text-minimo">Linguagens:</Text>
                <Text className="text-app-title-color pl-1 text-minimo">
                  PHP, JS
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Battles;
