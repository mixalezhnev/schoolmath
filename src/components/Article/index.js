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
			<div className={styles.subject}>

				<div className={styles.group}>
					<img src={icon} alt={title} className={styles.icon} />
					<a href='' className={styles.title}>{title}</a>
				</div>
				<div className={styles.container}>
					<p className={styles.description}>{description}</p>
					<div className={styles.lessons}>
						{lessons.map((lesson, index) => (
							<div className={styles.lesson} key={index}>
								<a href='' onClick={this.onLinkClick} className={styles.lessonLink}>{lesson.title}</a>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
