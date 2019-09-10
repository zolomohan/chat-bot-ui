import React from 'react';
import classes from '../styles/Suggestions.module.css'

export default function Suggestions({ suggestions, handleSubmit }) {
	return (
		<div className={classes.suggestionContainer}>
			{suggestions.map((suggesstion) => (
				<div className={classes.suggestions} onClick={() => handleSubmit(suggesstion)}>
					<p className={classes.chatMessage}>{suggesstion}</p>
				</div>
			))}
		</div>
	);
}