import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
  	<div className="ui container comments">
			<ApprovalCard>
    		<CommentDetail author="Jane" timeAgo="Сегодня в 12:43" content={faker.lorem.words()} avatar={faker.image.avatar()} />
			</ApprovalCard>
			<ApprovalCard>
      	<CommentDetail author="Eugene" timeAgo="Сегодня в 14:40" content={faker.lorem.words()} avatar={faker.image.avatar()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Drake" timeAgo="Вчера в 19:30" content={faker.lorem.words()} avatar={faker.image.avatar()} />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));