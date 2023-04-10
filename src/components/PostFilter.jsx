import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />
            <MySelect
                defaultOption="Sort"
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'}
                ]}
                value={filter.sort}
                onChange={selected => setFilter({...filter, sort: selected})}
            />
        </div>
    );
};

export default PostFilter;