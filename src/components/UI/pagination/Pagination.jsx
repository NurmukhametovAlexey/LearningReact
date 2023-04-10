import React from 'react';
import MyButton from "../button/MyButton";
import classes from './Pagination.module.css'
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({total, page, changePage}) => {

    const pagesArray = usePagination(total)

    return (
        <div className={classes.page__nums__wrapper}>
            {pagesArray.map(i =>
                <MyButton
                    isPrimary={page === i}
                    onClick={() => changePage(i)}
                    key={i}
                >{i}</MyButton>
            )}
        </div>
    );
};

export default Pagination;