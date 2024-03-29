import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import Preload from "./screens/Preload";
import OnBoarding1 from "./screens/OnBoarding1";
import OnBoarding2 from "./screens/OnBoarding2";
import OnBoarding3 from "./screens/OnBoarding3";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import LandingScreen from "./screens/LandingScreen";
import MenuPlayer from "./screens/MenuPlayer";
import Duel from "./screens/Duel";
import Battles from "./screens/Battles";
import ChooseOponent from "./screens/ChooseOponent";
import Score from "./screens/Score";
import PlayerInformation from "./screens/PlayerInformation";
import ExercisesAlone from "./screens/ExercisesAlone";
import ExercisesDuel from "./screens/ExercisesDuel";
import DoneScreen from "./screens/DoneScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Preload} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="MenuPlayer" component={MenuPlayer} />
        <Stack.Screen name="Duel" component={Duel} />
        <Stack.Screen name="Battles" component={Battles} />
        <Stack.Screen name="ChooseOponent" component={ChooseOponent} />
        <Stack.Screen name="Score" component={Score} />
        <Stack.Screen name="PlayerInformation" component={PlayerInformation} />
        <Stack.Screen name="ExercisesAlone" component={ExercisesAlone} />
        <Stack.Screen name="ExercisesDuel" component={ExercisesDuel} />
        <Stack.Screen name="DoneScreen" component={DoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
