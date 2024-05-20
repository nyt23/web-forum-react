import React from 'react';

function Header(props) {
    return (
        <div>
            <h2>{props.username}</h2>
            <img src={props.profileImg} alt="profile" />
        </div>
    )
}

export default Header;