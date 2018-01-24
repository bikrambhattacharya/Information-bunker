import React from 'react';
import { connect } from 'react-redux';
import IndividualPage from './IndividualPage'
const PostList = (props) => (
    <div>
        {props.blog.map((post) => {
            return <IndividualPage key={post.id} {...post} />
        })}
    </div>

);
const mapStateToProps = (state) => {
    return {
        blog: state.blog
    }
};
export default connect(mapStateToProps)(PostList);