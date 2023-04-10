import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts
    }, [sort, posts]);
}

export const useFilteredPosts = (posts, query) => {
    return useMemo(() => {
        return posts.filter(l => l.title.toLowerCase().includes(query))
    }, [query, posts]);
}

export const usePosts = (posts, sort, query) => {
    return useSortedPosts(useFilteredPosts(posts, query), sort);
}