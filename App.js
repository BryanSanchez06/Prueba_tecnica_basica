import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "./screens/inicio";
import peliculas from "./screens/peliculas";
import series from "./screens/series";
import store from "./screens/redux/store";
import { Provider } from "react-redux";


const Stack = createNativeStackNavigator();

export default function index() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          opcions={{ headerShown: false }}
          component={Inicio}
        />
          <Stack.Screen
          name="Peliculas"
          opcions={{ headerShown: false }}
          component={peliculas}
        />
          <Stack.Screen
          name="Series"
          opcions={{ headerShown: false }}
          component={series}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}