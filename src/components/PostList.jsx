import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({remove, title, posts, ifEmpty}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: "center"}}>{ifEmpty}</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem removeMe={() => remove(post)} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;