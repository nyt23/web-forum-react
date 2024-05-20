import React from 'react';
import {comments} from "./commentData";
import Card from "./Card";
import './App.css';

function App() {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <Card
                        commentObj={comment}
                />
                )
            })}
        </div>
    )
}



export default App;
