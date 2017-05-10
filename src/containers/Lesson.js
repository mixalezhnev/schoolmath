import React, {Component} from 'react';

import Lesson from '../components/Lesson';

import {connect} from 'react-redux';

import { listenToLesson } from '../store/actions/lesson';

const mapStateToProps = ({lesson}) => ({
  lesson: lesson.data
})

const mapDispatchToProps = (dispatch) => ({
  getLesson: (id) => {
    dispatch(listenToLesson(id));
  }
})

class LessonContainer extends Component {

  componentDidMount() {
    this.props.getLesson(this.props.params.lesson);
  }

  componentWillReceiveProps (nextProps) {
    const {params, getLesson} = this.props;

    if (nextProps.params.lesson !== params.lesson)
      getLesson(nextProps.params.lesson);
  }

  render() {
    return <Lesson {...this.props}/>
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer);
