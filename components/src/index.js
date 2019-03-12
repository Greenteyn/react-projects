import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail author="Jane" timeAgo="Сегодня в 12:43" content={faker.lorem.words()} avatar={faker.image.avatar()} />
        <CommentDetail author="Eugene" timeAgo="Сегодня в 14:40" content={faker.lorem.words()} avatar={faker.image.avatar()} />
        <CommentDetail author="Drake" timeAgo="Вчера в 19:30" content={faker.lorem.words()} avatar={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));