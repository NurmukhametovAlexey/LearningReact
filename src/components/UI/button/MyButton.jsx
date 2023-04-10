import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, isPrimary, ...props}) => {

    const rootClasses = [classes.myBtn]
    if (isPrimary) {
        rootClasses.push(classes.primary)
    }

    return (
        <button {...props} className={rootClasses.join(" ")}>
            {children}
        </button>
    );
};

export default MyButton;