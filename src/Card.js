import React from 'react';
import Body from "./Body";
import Header from "./Header";

function Card(props) {
    return (
        <div>
            <Header username={props.commentObj.username} profileImg={props.commentObj.profileImg} />
            <Body comment={props.commentObj.comment} />
        </div>
    )
}

export default Card;