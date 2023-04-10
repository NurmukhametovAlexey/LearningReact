import React, {useEffect, useMemo, useState} from 'react';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query)

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getPage(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (getter, setter) => (post) => {
        setter([...getter, {...post, id: Date.now()}])
        setModal(false)
    };

    const removePost = (getter, setter) => (post) => {
        setter(getter.filter(p => p.id !== post.id))
    };

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}>
                Add new language
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost(posts, setPosts)}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                postError &&
                <h1>Some error occurred: {postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost(posts, setPosts)}
                            title="Posts:"
                            posts={sortedAndFilteredPosts}
                            ifEmpty={"No posts found"}
                />
            }
            <Pagination
                total={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts;
