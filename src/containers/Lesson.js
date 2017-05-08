import React from 'react';
import Lesson from '../components/Lesson';

import {connect} from 'react-redux';

const mapStateToProps = ({articles}, ownProps) => ({
  lesson: articles.data.filter(subject =>
    subject.url == ownProps.params.subject
  )[0].lessons.filter(lesson =>
    lesson.url == ownProps.params.lesson
  )[0]
})

export default connect(mapStateToProps)(Lesson);
