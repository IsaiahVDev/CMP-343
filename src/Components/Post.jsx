import React from 'react';

import comment from './Comment';

function Post() {

    return(
        <div>
            <h3>Test Post</h3>
            <p>This is a test post that we will edit later!</p>
            <p>Likes: 30</p>
            <p>Comments:</p>
            <Comment />
        </div>
    )
}

export default Post 