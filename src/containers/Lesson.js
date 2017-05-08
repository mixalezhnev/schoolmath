// import React from 'react';
import Lesson from '../components/Lesson';

import {connect} from 'react-redux';

import { listenToLesson } from '../store/actions/Lesson';

const mapStateToProps = ({lesson}) => ({
  lesson: lesson.data
})

const mapDispatchToProps = (dispatch) => ({
  getLesson: (id) => {
    dispatch(listenToLesson(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
