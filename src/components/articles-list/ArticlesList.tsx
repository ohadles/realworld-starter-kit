import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View,} from "react-native";

import {articlesService} from "../../services";
import {commonStyles} from "../../style";
import {Article} from "../../types";
import {ArticleItem} from "./ArticleItem";

type ArticlesListProps = Readonly<{}>;

export function ArticlesList({}: ArticlesListProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [articles, setArticles] = useState<ReadonlyArray<Article>>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            const articles = await articlesService.getArticles({});
            setArticles(articles || [])
            setLoading(false);
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <View style={[commonStyles.flexCenter, styles.container]}>
                <ActivityIndicator/>
            </View>
        );
    }

    if (articles.length === 0) {
        return (
            <View style={[commonStyles.flexCenter, styles.container]}>
                <Text>No articles found</Text>
            </View>
        );
    }

    return (
        <View style={[commonStyles.flexCenter, styles.container]}>
            <FlatList
                style={styles.container}
                data={articles}
                renderItem={({item}) => <ArticleItem article={item}/>}
                keyExtractor={(item) => item.slug}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
    },
});