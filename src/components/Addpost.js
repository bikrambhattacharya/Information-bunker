import React from 'react';
import Postform from './Postform';
import Footer from './footer';
import { addPost } from '../actions/Post';
import { connect } from 'react-redux';
const AddPostPage = (props) => (
    <div className="wrapper">
        <h1>Add Post:</h1>
        <Postform onSubmit={(post) => {
            props.dispatch(addPost(post));
            props.history.push('/');
        }} />
    </div>
);

export default connect()(AddPostPage);