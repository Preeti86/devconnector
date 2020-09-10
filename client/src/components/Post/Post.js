import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import  PostItem  from '../posts/PostItem';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost, match.params.id]);

    return loading || post === null ? <Spinner /> : 
    <Fragment>
          <PostItem post={post} showActions={false} />             
    </Fragment>
};
    
Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ 
    post: state.post
});

export default connect(mapStateToProps, {getPost})(Post);
