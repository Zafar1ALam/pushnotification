import React, { useEffect } from 'react';
import { View, Button } from 'react-native'
import PushNotification from "react-native-push-notification";

const App = props => {
  useEffect(() => {
    createChannel()
  }, [])

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: 'Test  Channel'
    })
  }

  const real = () => {
    console.log('d')
    PushNotification.localNotification({
      channelId: "test-channel",
      title: "Real Time Notifications",
      message: "My Notification Message",
      playSound: true,
      autoCancel: true,
      priority: "high"
      // color: "red",
    })
  }

  const schedule = () => {
    console.log('d')


    PushNotification.localNotificationSchedule({
      channelId: "test-channel",
      title: "Schedule Notifications",
      //... You can use all the options from localNotifications
      message: "My Notification Message hhhhhhhhhhhhhh", // (required)
      date: new Date(Date.now() + 3 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      playSound: true,
      //  repeatTime: 10,
    });
  }
  return (
    <View>
      <Button title="schedule" onPress={() => {
        schedule()
      }} />

      <Button title="click" onPress={() => {
        real()
      }} />
    </View>
  );
};



export default App;