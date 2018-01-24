import React from 'react';
import { Link } from 'react-router-dom';
const IndividualPage = ({ id, title,message }) => (
    <div className="post-dashboard">
    <p>{title}</p>
        <p>{message}</p>
        <button className="button-view-post"><Link className="link-fullpost" to={`/display/${id}`} >
        View full post
        </Link></button>
    </div>
);
export default IndividualPage;