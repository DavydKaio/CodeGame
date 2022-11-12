import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CircularProgress from "react-native-circular-progress-indicator";

import { Bars3BottomLeftIcon } from "react-native-heroicons/outline";
import Player from "../assets/player1.svg";

const LandingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 pt-12 px-5 bg-app-BG">
      <TouchableOpacity onPress={() => navigation.navigate("MenuPlayer")}>
        <Bars3BottomLeftIcon width={24} height={24} color="#FA5075" />
      </TouchableOpacity>

      <View className="pt-6">
        <Text className="text-lg font-bold text-app-title-color">
          Olá, Ariano!
        </Text>
        <Text className="text-sm font-medium text-app-white">
          Turma APC 2022.2
        </Text>
      </View>

      <View className="flex items-center mt-5 w-full">
        <CircularProgress
          value={58}
          valueSuffix={"%"}
          radius={120}
          rotation={150}
          activeStrokeWidth={50}
          inActiveStrokeWidth={50}
          strokeLinecap="butt"
          activeStrokeColor="#FA5075"
          inActiveStrokeColor="#646464"
          subtitle="de rendimento até agora"
          subtitleColor="#FFF"
          subtitleStyle={{ fontSize: 14 }}
        />

        <TouchableOpacity className="ml-36 mt-5">
          <Text className="underline text-app-white text-link">
            Ver estatísticas
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-8">
        <Text className="text-sm font-bold text-app-white">
          Vença desafios e evolua
        </Text>
        <Text className="text-app-white">
          Sozinho ou com amigos, quanto mais questões solucionar, maior será seu
          ranking
        </Text>
        <TouchableOpacity className="flex items-center py-2 mt-3 rounded-full bg-app-title-color">
          <Text className="font-bold text-app-white">Comece a Codar</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5">
        <Text className="text-app-white font-bold mb-2">
          Disponíveis pra você
        </Text>
        <View className="flex flex-row">
          <TouchableOpacity>
            <View className="px-3 pt-6 w-40 h-40 bg-app-bg-card mr-7 rounded-lg">
              <Text className="font-bold text-app-title-color">
                Desafio do dia
              </Text>
              <Text className="font-bold text-app-white mb-3">+10 pt</Text>
              <Text className="text-app-white">
                Desafie-se diariamente e melhore sua pontuação para subir de
                ranking!
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="px-3 pt-6 w-40 h-40 bg-app-bg-card rounded-lg">
              <Text className="font-bold text-app-title-color">
                Exercícios da semana
              </Text>
              <Text className="font-bold text-app-white mb-3">+20 pt</Text>
              <Text className="text-app-white">
                Resolva desafios propostos pelo professor para ganhar pontuação
                extra na disciplina
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-bold text-app-white">Ranking da sua turma</Text>
          <TouchableOpacity>
            <Text className="text-app-white text-link underline">Ver Mais</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center mt-3">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <View className="flex flex-row items-center mr-4">
                <Text className="font-bold text-app-title-color mr-2">#1</Text>
                <Player width={38} height={38} />
                <Text className="font-bold text-app-white ml-2">Ana</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row items-center mr-4">
                <Text className="font-bold text-app-title-color mr-2">#2</Text>
                <Player width={38} height={38} />
                <Text className="font-bold text-app-white ml-2">Você</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row items-center mr-4">
                <Text className="font-bold text-app-title-color mr-2">#3</Text>
                <Player width={38} height={38} />
                <Text className="font-bold text-app-white ml-2">Leonardo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row items-center mr-4">
                <Text className="font-bold text-app-title-color mr-2">#4</Text>
                <Player width={38} height={38} />
                <Text className="font-bold text-app-white ml-2">Rodrigo</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
