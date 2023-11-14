import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Colors} from "react-native-ui-lib";
import * as Notifications from 'expo-notifications';


function schedulePushNotification() {
    Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: {data: 'goes here'},
        },
        trigger: {seconds: 1},
    });
}


export function AlarmClock() {
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        Notifications.addNotificationReceivedListener((notification) => {
            console.log(notification)
        });
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text>Choose time</Text>
            <View style={styles.datePicker}>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"time"}
                    is24Hour={true}
                    onChange={(_, date) => {
                        setDate(date || new Date())
                    }}
                />
            </View>
            <View>
                <Button label={'Press'} onPress={() => {
                    console.log("ima")
                    schedulePushNotification();
                }}/>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    datePicker: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});