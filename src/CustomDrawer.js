import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { color } from "react-native-reanimated";

let phonenum = 3135671;

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#308FFF" }}
      >
        <View style={{ height: 160, backgroundColor: "#308FFF" }}>
          <MaterialCommunityIcons name="phone" size={100} color="#fff" />
          <Text style={{ color: "#fff", marginLeft: 15, marginTop: 10 }}>
            현재 등록된 전화번호 :{phonenum}개
          </Text>
          <Text style={{ color: "#fff", marginLeft: 15 }}>
            (오늘: 407개/ 어제 694개)
          </Text>
        </View>
        <View style={{ backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="share-variant-outline" size={30} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              Share your Experience
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="logout" size={30} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
