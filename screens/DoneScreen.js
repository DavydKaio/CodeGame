import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { XCircleIcon } from "react-native-heroicons/outline";
import { CheckIcon } from "react-native-heroicons/solid";

const DoneScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-app-BG">
      <TouchableOpacity
        onPress={() => navigation.navigate("LandingScreen")}
        className="flex-row justify-end mt-28 mr-16"
      >
        <XCircleIcon width={26} height={26} color="#FFF" />
      </TouchableOpacity>

      <View className="flex-col items-center mt-12">
        <View className="flex items-center justify-center bg-app-title-color w-36 h-36 rounded-full border-2 border-white">
          <CheckIcon width={80} height={80} color="#FFF" />
        </View>
        <Text className="text-white text-2xl mt-10">Você conseguiu!</Text>
        <Text className="text-white mt-20 w-44">
          Parabéns, mais um pra conta, agora vamos para o próximo.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Score")}
          className="bg-app-title-color py-2 px-12 rounded-full mt-12 mr-4"
        >
          <Text className="font-bold text-white">Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoneScreen;
