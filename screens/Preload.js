import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Preload = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <LinearGradient
      className="flex-1 items-center justify-center"
      colors={["#FF6480", "#F22E63"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text className="font-black text-2xl leading-7 text-white">CodeGame</Text>
    </LinearGradient>
  );
};

export default Preload;
