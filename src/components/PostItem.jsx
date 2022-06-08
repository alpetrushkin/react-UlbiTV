import React from 'react';

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.posts.id}. {props.posts.title}</strong>
                <div>
                    {props.posts.body}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;