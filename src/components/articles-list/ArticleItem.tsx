import React, { useCallback } from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationPropRootStack, ScreenName } from "../../navigation";

import {Article} from "../../types";

type ArticleItemProps = Readonly<{
    article: Article;
}>;

export function ArticleItem({article}: ArticleItemProps) {
    const navigation = useNavigation<NavigationPropRootStack>();
    const {title, description, tagList,author , slug} = article;


    const goToArticle = useCallback(
        () => navigation.navigate(ScreenName.Article, { articleSlug: slug }),
        [navigation, slug]
    );

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{ uri: author.image }} />
                <Text style={styles.username}>
                    {author.username}
                </Text>
                <Text style={styles.date}>{new Date(article.createdAt).toLocaleDateString()}</Text>
            </View>
            <View>
                <Text style={styles.title} onPress={goToArticle}>
                    {title}
                </Text>
                <Text style={styles.description} onPress={goToArticle}>
                    {description}
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.tagList}>
                    {tagList.map((tag: string, index: number) => (
                        <Text key={index} style={styles.tag}>
                            {tag}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        marginVertical: 6,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
    },
    image: {
        position: "absolute",
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    username: {
        marginLeft: 38,
        color: "#5CB85C",
    },
    date: {
        marginLeft: 38,
        color: "#bbb",
    },
    title: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
    },
    description: {
        marginTop: 4,
        fontSize: 14,
        color: "#999",
    },
    tagList: {
        display: "flex",
        flexDirection: "row",
    },
    tag: {
        paddingHorizontal: 4,
        marginLeft: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#bbb",
        color: "#bbb",
        fontSize: 12,
    }
});
