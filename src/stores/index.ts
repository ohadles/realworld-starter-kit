import { state, setters, getters } from "remx";

import { Article, Profile } from "../types";

type ArticlesState = {
    openArticle: Article | undefined;
};

const initialArticlesState = {
    openArticle: undefined,
};

const articlesState = state<ArticlesState>(initialArticlesState);

const articlesSetters = setters({
    setOpenArticle(article: Article | undefined) {
        articlesState.openArticle = article;
    }
});

const articlesGetters = getters({
    getOpenArticle(): { article?: Article } {
        return {
            article: articlesState.openArticle,
        };
    },
});

export const articlesStore = {
    ...articlesSetters,
    ...articlesGetters,
};
