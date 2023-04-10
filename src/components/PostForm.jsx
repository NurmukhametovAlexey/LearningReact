import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const emptyPost = {title: '', body: ''};
    const [post, setPost] = useState(emptyPost)

    const createPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost(emptyPost)
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type={"text"}
                placeholder={"Language name"}
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type={"text"}
                placeholder={"Language description"}
            />
            <MyButton onClick={createPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;