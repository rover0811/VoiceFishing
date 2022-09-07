import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import * as React from "react";
import CustomDrawer from "./CustomDrawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListItem } from "@rneui/themed";

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
      {/* <Drawer.Screen
        name="Phone"
        component={UnderTab}
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
      /> */}
      {/* 여기서 navigate해서 탭바의 정확한 그곳으로 가게끔 할 수가 있나?!*/}
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

const list = [
  {
    name: "홍길동",
    subtitle: "010-5029-9071",
  },
  {
    name: "김기열",
    subtitle: "Vice Chairman",
  },
  {
    name: "김준현",
    subtitle: "Vice Chairman",
  },
  {
    name: "강유미",
    subtitle: "Vice Chairman",
  },
  {
    name: "유민상",
    subtitle: "Vice Chairman",
  },
  {
    name: "문세윤",
    subtitle: "Vice Chairman",
  },
  {
    name: "김민경",
    subtitle: "Vice Chairman",
  },
  {
    name: "허경환",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman",
  },
];

function Phone() {
  return (
    <SafeAreaView
    // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
function Messages() {
  return (
    <SafeAreaView
    // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
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
