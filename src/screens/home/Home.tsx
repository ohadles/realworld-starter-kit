import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {ArticlesList} from "../../components/articles-list";


export function Home() {


    return (
        <View style={styles.container}>
            <View style={styles.tagsContainer}>
            </View>
            <ArticlesList/>
            <View style={styles.newArticleButton}>
                <Text>Abale</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
    },
    tagsContainer: {
        height: 34,
        justifyContent: "center",
    },
    newArticleButton: {
        position: "absolute",
        right: 16,
        bottom: 32,
    },
});