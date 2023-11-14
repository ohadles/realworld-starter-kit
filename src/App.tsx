import React, {useEffect} from "react";
import {StyleSheet, View} from "react-native";
import {Home} from "./screens/home";
//todo what this is
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Navigation} from "./navigation";
import {AlarmClock} from "./screens/alarmClock/AlaramClock";
import * as Notifications from "expo-notifications";
import {Button} from "react-native-ui-lib";
import * as Permissions from 'expo-permissions';
import {PermissionStatus} from "expo-modules-core/src/PermissionsInterface";

const AskForNotificationsPermissionAsync = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== PermissionStatus.GRANTED) {
        console.log('Permission to receive notifications denied');
        return;
    }
};

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export function App() {
    useEffect(() => {
        AskForNotificationsPermissionAsync()
    }, []);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <AlarmClock/>
                {/*<Navigation/>*/}
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});
