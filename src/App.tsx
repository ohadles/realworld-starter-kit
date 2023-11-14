import React from "react";
import {StyleSheet, View} from "react-native";
import {Home} from "./screens/home";
//todo what this is
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Navigation} from "./navigation";

export function App() {

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Navigation/>
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
