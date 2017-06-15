import React, {Component} from 'react';

import PracticePageProgress from '../components/PracticePageProgress';

import { connect } from 'react-redux';

const mapStateToProps = ({ progress, articles }) => ({
	progress: progress.data,
  articles: articles.data
})

class PracticePageProgressContainer extends Component {
	render() {
		const { completed, total, next } = this.props.progress;
    const percentage = completed * 100 / total ^ 0;

		const nextTitle = this.props.articles.length != 0 ?
      this.props.articles.find(subject => {
        return subject.lessons.find(lesson => {
          if (lesson.id == next)
            return true;
        })
      }).lessons.find(lesson => lesson.id == next).title : '';

		return <PracticePageProgress progress={{...this.props.progress, percentage, nextTitle} } />
	}
}

export default connect(mapStateToProps)(PracticePageProgressContainer);