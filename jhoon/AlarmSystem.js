import { useEffect } from "react";
import * as Notifications from "expo-notifications";

const AlarmSystem = {
  scheduleNotificationHandler: (scheduleNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local Notification",
        body: "Body of notification",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }),

  setNotificationHandler: Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldPlaySound: false,
        shouldSetBadge: true,
        shouldShowAlert: true,
      };
    },
  }),

  useEffect: useEffect(() => {
    const subcsription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("recieved Alarm");
        console.log(notification);
      }
    );

    return () => {
      subcsription.remove();
    };
  }, []),
};

export default AlarmSystem;
