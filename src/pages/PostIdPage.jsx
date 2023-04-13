import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import PostItem from "../components/PostItem";

const PostIdPage = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchCommentsById, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsById(params.id);
    }, [])

    return (
        <div>
            <h1>You navigated to post #{params.id}!</h1>
            {
                isLoading
                    ? <Loader/>
                    : <PostItem post={post} removeMe={() => navigate(-1)}/>
            }
            <h1>Comments</h1>
            {
                isComLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comment =>
                            <div style={{marginTop: 15}} key={comment.id}>
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;