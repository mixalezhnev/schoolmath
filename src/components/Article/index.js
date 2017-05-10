import React, { Component } from 'react';

import ProgressIcon from '../ProgressIcon';
import SubjIcon from '../SubjIcon';

import { getSubjectPercentage } from '../../ulits';

import { Link } from 'react-router';

import styles from './Article.css'

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.radius = 22;
	}

	render() {
		const { data, progress } = this.props;
		const { description, icon, id, lessons, title } = data;
		const subject = progress[id] || {};

		const total =  getSubjectPercentage(subject);

		return (
			<div className={styles.subject}>

				<div className={styles.heading}>
					<ProgressIcon total={total} radius={this.radius} />
					<SubjIcon url={icon} />
					<Link to={`/subject/${id}`} className={styles.title}>{title}</Link>
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
