import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import AlarmSystem from './AlarmSystem.js';

AlarmSystem.scheduleNotificationHandler();

export default function App__Hoon() {

  AlarmSystem.useEffect();
  AlarmSystem.scheduleNotificationHandler();

  return (
    <View style={styles.container}>
      <Text>TIledasd</Text>
      <Button
        title="Schedule Notification"
        onPress={AlarmSystem.scheduleNotificationHandler()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
