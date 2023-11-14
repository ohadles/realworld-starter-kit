import React, {useEffect, useState} from "react";
import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View,} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useConnect} from "remx";

import {commonStyles} from "../../style";
import {RootStackParamList, ScreenName} from "../../navigation";
import {articlesService} from "../../services";
import {articlesStore} from "../../stores";

type ArticleProps = NativeStackScreenProps<
    RootStackParamList,
    ScreenName.Article
>;

export function Article({route}: ArticleProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const {article} = useConnect(articlesStore.getOpenArticle);

    useEffect(() => {
        const fetchArticleData = async () => {
            setLoading(true);
            const articleSlug = route.params.articleSlug;
            const fetchedArticle = await articlesService.getArticle(articleSlug);
            articlesStore.setOpenArticle(fetchedArticle);
            setLoading(false);
        };

        fetchArticleData();
    }, [route.params.articleSlug]);

    if (loading || !article) {
        return (
            <View style={commonStyles.flexCenter}>
                <ActivityIndicator/>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={[styles.paddingBlock, styles.headerContainer]}>
                <Text style={styles.title}>{article.title}</Text>
                <View>
                    <Image style={styles.image} source={{uri: article.author.image}}/>
                    <Text style={styles.username}>
                        {article.author.username}
                    </Text>
                    <Text style={styles.date}>{new Date(article.createdAt).toLocaleDateString()}</Text>
                </View>
            </View>
            <View style={styles.paddingBlock}>
                <Text>{article.body}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    paddingBlock: {
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    headerContainer: {
        backgroundColor: "#333",
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
        marginBottom: 12,
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
    },
    tagsContainer: {
        borderBottomWidth: 1,
        paddingHorizontal: 0,
        borderBottomColor: "#aaa",
    },
});
