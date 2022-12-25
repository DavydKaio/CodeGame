import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  ArrowLeftIcon,
  ShieldExclamationIcon,
} from "react-native-heroicons/outline";

const ExercisesAlone = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-app-BG">
      <View className="flex-row gap-3 pt-14 px-5">
        <TouchableOpacity
          className="pt-1.5"
          onPress={() => navigation.navigate("Duel")}
        >
          <ArrowLeftIcon width={20} height={20} color="#FFF" />
        </TouchableOpacity>
        <View>
          <Text className="text-2xl font-bold text-white">
            Exercícios semanais
          </Text>
          <Text className="text-sm font-semibold text-app-title-color">
            Semana 3
          </Text>
        </View>
      </View>

      <View className="w-full h-1 bg-gray-400 mt-4 relative">
        <View className="w-20 h-1 bg-app-title-color absolute"></View>
      </View>

      <View className="px-5 mt-5">
        <Text className="text-sm font-semibold text-app-title-color">
          Questão 2/10
        </Text>
        <Text className="text-sm text-white mt-2">
          Dada uma seqüência de números inteiros não-nulos, seguida por 0,
          deseja-se imprimir seus quadrados. A solução abaixo está correta?
        </Text>

        <View className="mt-5 border border-app-title-color rounded-lg py-5 px-5">
          <Text className="text-sm text-white">def main():</Text>
          <Text className="text-sm text-white">
            num = int(input("Digite um número: "))
          </Text>
          <Text className="text-sm text-white pl-4">while num != 0:</Text>
          <Text className="text-sm text-white pl-8">quadrado = num * 2</Text>
          <Text className="text-sm text-white pl-8">
            print(num, "ao quadrado é", quadrado)
          </Text>
          <Text className="text-sm text-white pl-8">
            num = int(input("Digite um número: "))
          </Text>
          <Text></Text>
          <Text className="text-sm text-white">main()</Text>
        </View>

        <Text className="text-white font-bold mt-7 ml-2">Escolha uma:</Text>

        <View className="mt-3">
          <TouchableOpacity className="flex-row items-center border border-app-title-color rounded-xl">
            <View className="bg-app-title-color rounded-full my-2 mx-2 py-1 px-2">
              <Text className="text-white font-bold">A</Text>
            </View>
            <Text className="text-white">Sim, está correta</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center border border-app-title-color rounded-xl mt-3">
            <View className="bg-app-title-color rounded-full my-2 mx-2 py-1 px-2">
              <Text className="text-white font-bold">B</Text>
            </View>
            <Text className="text-white">
              Não, o cálculo “quadrado” está errado
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center border border-app-title-color rounded-xl mt-3">
            <View className="bg-app-title-color rounded-full my-2 mx-2 py-1 px-2">
              <Text className="text-white font-bold">C</Text>
            </View>
            <Text className="text-white">Não, a função main está errada</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center border border-app-title-color rounded-xl mt-3">
            <View className="bg-app-title-color rounded-full my-2 mx-2 py-1 px-2">
              <Text className="text-white font-bold">D</Text>
            </View>
            <Text className="text-white">Não, o laço while está errado</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-evenly mt-8 mb-5">
        <TouchableOpacity className="bg-app-title-color py-2 px-12 rounded-full">
          <Text className="font-bold text-white">Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DoneScreen")}
          className="bg-app-title-color py-2 px-12 rounded-full"
        >
          <Text className="font-bold text-white">Próxima</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="flex-row gap-1 items-center justify-center">
        <ShieldExclamationIcon width={15} height={15} color="#808080" />
        <Text className="text-app-gray underline text-link">
          informar erro na questão/{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExercisesAlone;
