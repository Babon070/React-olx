import React from 'react';
import { Link } from 'react-router-dom';


const RedirectButton = ({headerButton, title, type}) => {
    return (
        <div>
             <Link className={type === "light" ? "link link--light" : "link link--dark"} to={headerButton}>
               {title}
            </Link>
        </div>
    );
}

export default RedirectButton;
