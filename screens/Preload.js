import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Logo from "../assets/codeGame.svg";

const Preload = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (true) {
      setTimeout(() => navigation.navigate("OnBoarding1"), 4000);
    }
  }, []);

  return (
    <LinearGradient
      className="flex-1 items-center justify-center"
      colors={["#FF6480", "#F22E63"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Logo width="100%" height={100} />
      <Text className="font-black text-xl leading-7 text-white pt-3.5">
        CodeGame
      </Text>
    </LinearGradient>
  );
};

export default Preload;
