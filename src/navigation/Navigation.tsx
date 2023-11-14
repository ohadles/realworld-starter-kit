import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Home} from "../screens/home";
import {ScreenName, screenTitle, RootStackParamList} from "./types";
import {Article} from "../screens/article";

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = () => ({
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "700" as const,
    },
    headerStyle: {
        backgroundColor: "#5CB85C",
    },
});


export function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ScreenName.Home}
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name={ScreenName.Home}
                    component={Home}
                    options={{
                        title: screenTitle[ScreenName.Home],
                    }}
                />
                <Stack.Screen
                    name={ScreenName.Article}
                    component={Article}
                    options={{
                        title: screenTitle[ScreenName.Article],
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
