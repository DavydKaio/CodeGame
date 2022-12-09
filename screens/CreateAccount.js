import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { EyeIcon } from "react-native-heroicons/outline";

import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";

const CreateAccount = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-app-BG">
      <View className="w-64 mt-10">
        <Text className="text-2xl font-bold mb-2 text-app-title-color">
          Criar conta
        </Text>
        <Text className="text-white">
          Informe seus dados e os dados da disciplina para ficar mais fácil de
          encontrar a galera.
        </Text>

        <TextInput
          className="border-b border-b-app-title-color mt-7 text-white"
          placeholder="Nome"
          placeholderTextColor={"#FFF"}
        />
        <TextInput
          className="border-b border-b-app-title-color mt-9 text-white"
          placeholder="Usuário"
          placeholderTextColor={"#FFF"}
        />
        <View className="flex flex-row gap-x-6">
          <TextInput
            className="border-b border-b-app-title-color mt-9 text-white w-6"
            value="+82"
          />
          <TextInput
            className="border-b border-b-app-title-color mt-9 text-white w-52"
            placeholder="Celular"
            placeholderTextColor={"#FFF"}
          />
        </View>
        <TextInput
          className="border-b border-b-app-title-color mt-9 text-white"
          placeholder="Disciplina"
          placeholderTextColor={"#FFF"}
        />
        <View className="flex flex-row gap-x-8">
          <TextInput
            className="border-b border-b-app-title-color mt-9 text-white w-28"
            placeholder="Período"
            placeholderTextColor={"#FFF"}
          />
          <TextInput
            className="border-b border-b-app-title-color mt-9 text-white w-28"
            placeholder="Professor"
            placeholderTextColor={"#FFF"}
          />
        </View>
        <TextInput
          className="border-b border-b-app-title-color mt-9 text-white"
          placeholder="Email"
          placeholderTextColor={"#FFF"}
        />
        <View className="flex flex-row items-center justify-between border-b border-b-app-title-color mt-9">
          <TextInput
            className="text-white"
            placeholder="Senha"
            placeholderTextColor={"#FFF"}
          />
          <TouchableOpacity>
            <EyeIcon width={12} height={12} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-between border-b border-b-app-title-color mt-9">
          <TextInput
            className="text-white"
            placeholder="Confirmar Senha"
            placeholderTextColor={"#FFF"}
          />
          <TouchableOpacity>
            <EyeIcon width={12} height={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("LandingScreen")}
        className="flex items-center justify-center w-44 h-10 rounded-full bg-app-title-color mt-10"
      >
        <Text className="text-base text-white font-semibold">Cadastrar</Text>
      </TouchableOpacity>

      <View className="flex items-center mt-6">
        <Text className="text-app-title-color">Conectar com:</Text>
        <View className="flex flex-row justify-evenly w-20 mt-2">
          <TouchableOpacity>
            <Google width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Facebook width={26} height={26} />
          </TouchableOpacity>
        </View>

        <Text className="text-white mt-4">Oxe, já cadastrado?</Text>
        <TouchableOpacity
          className="flex flex-row justify-center"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-app-title-color font-bold mt-1">Entre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccount;
