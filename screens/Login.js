import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { EyeIcon } from "react-native-heroicons/outline";

import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";

const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-app-BG">
      <Text className="text-2xl font-bold text-app-title-color w-56">
        Que bom te ver de novo!
      </Text>

      <TextInput
        className="w-56 border-b border-b-app-title-color mt-9 text-app-white"
        placeholder="Email"
        placeholderTextColor={"#FFF"}
      />
      <View className="flex flex-row items-center justify-between w-56 border-b border-b-app-title-color mt-9">
        <TextInput
          className="text-app-white"
          placeholder="Senha"
          placeholderTextColor={"#FFF"}
        />
        <TouchableOpacity>
          <EyeIcon width={12} height={12} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="flex flex-row justify-end w-56 mt-1">
        <Text className="text-app-white text-xs">Esquecesse?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("LandingScreen")}
        className="flex items-center justify-center w-44 h-10 rounded-full bg-app-title-color mt-8"
      >
        <Text className="text-base text-app-white font-semibold">Simbora</Text>
      </TouchableOpacity>

      <View className="mt-10">
        <Text className="text-app-title-color">Conectar com:</Text>
        <View className="flex flex-row justify-evenly w-20 mt-2">
          <TouchableOpacity>
            <Google width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Facebook width={26} height={26} />
          </TouchableOpacity>
        </View>

        <Text className="text-app-white mt-4">Tem conta não?</Text>
        <TouchableOpacity
          className="flex flex-row justify-center"
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text className="text-app-title-color font-bold mt-1">Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
