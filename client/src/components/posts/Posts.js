import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (posts != null) {
        return loading ? (<Spinner />) : (
            <Fragment>
                <h1 className="large text-dark">Community</h1>
                <p className="lead text-dark">
                    <i className="fas fa-user" /> Welcome to the Honey Hive community!
            </p>
                <PostForm />
                <div className="posts">
                    {posts.map((post) => (
                        <PostItem key={post._id} post={post} />
                    ))}
                </div>
            </Fragment>
        )
    }
    else
        return (
            <Fragment />
        )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)