import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import * as React from "react";
import CustomDrawer from "./CustomDrawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerComponent></DrawerComponent>
    </NavigationContainer>
  );
}

function DrawerComponent() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ drawerLabelStyle: { marginLeft: -20 } }}
    >
      <Drawer.Screen
        name="Home"
        component={UnderTab}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Phone"
        component={Phone}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="forum" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" size={30} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function UnderTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Phone"
        component={Phone}
        options={{ tabBarIcon: makeIconRender("phone") }}
      ></Tab.Screen>
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ tabBarIcon: makeIconRender("forum") }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Home</Text>
    </SafeAreaView>
  );
}
function Phone() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Phone</Text>
    </SafeAreaView>
  );
}
function Messages() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Messages</Text>
    </SafeAreaView>
  );
}
function SettingScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Setting</Text>
    </SafeAreaView>
  );
}
