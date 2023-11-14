import { NavigationProp } from "@react-navigation/core/src/types";

export const enum ScreenName {
    Article = "Article",
    Home = "Home",
}

export type RootStackParamList = {
    [ScreenName.Article]: { articleSlug: string };
    [ScreenName.Home]: undefined;
};

export type NavigationPropRootStack = NavigationProp<RootStackParamList>;

export const screenTitle: Record<ScreenName, string> = {
    [ScreenName.Article]: "Article",
    [ScreenName.Home]: "Home",
};
