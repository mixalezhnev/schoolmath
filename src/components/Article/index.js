import React, { Component } from 'react';
import Link from 'react-router';

import styles from './Article.css'

export default class Article extends Component {
	onLinkClick = (e) => {
		e.preventDefault();
	}

	render() {
		const { icon, title, description, lessons } = this.props.data;

		return (
			<div className='subject'>

				<div className='subject__group'>
					<img src={icon} alt={title} className="subject__icon" />
					<a href='' className='subject__title'>{title}</a>
				</div>
				<div className='subject__container'>
					<p className='subject__desc'>{description}</p>
					<div className='subject__lessons'>
						{lessons.map((lesson, index) => (
							<div className='subject__lesson' key={index}>

								<a href='' onClick={this.onLinkClick}>{lesson.title}</a>

							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
