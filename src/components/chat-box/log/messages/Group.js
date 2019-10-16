import React, { memo } from 'react';
import Message from 'components/chat-box/log/messages/Message';
import { group } from 'styles/Group.module.css';

export default memo(function MessageGroup({ texts = [], images = [], user = 'bot' }) {
	return (
		<div className={group}>
			{texts.map((text, i) => (
				<Message
					key={i}
					text={text}
					user={user}
					hasAvatar={user === 'bot' && i === 0}
				/>
			))}
			{images.map((image, i) => (
				<Message
					key={i}
					image={image}
					user={user}
					hasAvatar={user === 'bot' && i === 0}
				/>
			))}
		</div>
	);
});
