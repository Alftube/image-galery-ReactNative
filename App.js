import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import pexelsLogo from "./assets/PexelsLogo.jpeg";
import React, { useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {

  const [openSearch, setopenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          options={{
            headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
            headerRight: () => (
              <Text
                style={{ color: "white", fontSize: 18 }}
                onPress={() => setopenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: "Pexels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: '#000000'
            }
          }}
        >
          {props => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            headerStyle: {
              backgroundColor: "#0D0D0D",
            },
            title: "Pexels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  },
});
