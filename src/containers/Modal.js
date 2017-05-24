import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { toggleModal, updateExercise } from '../store/actions/practice';
import { completeLesson } from '../store/actions/practice';

import { connect } from 'react-redux';

import ExerciseModal from '../components/ExerciseModal';

const mapStateToProps = ({ practice }) => ({
  practice
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleModal,
    getNext: updateExercise,
    completeLesson,
  }, dispatch)
})

class Modal extends Component {
  state = {
    curExercise: null
  }

  componentWillReceiveProps(nextProps) {
    const { exercises, completed } = nextProps.practice;
    if (exercises.length) {
      const curExercise = nextProps.practice.exercises.find(ex => !ex.completed);

      if (curExercise)
        this.setState({
          curExercise
        });
        else if (!completed){
          const { lesson, subject } = this.props.practice;
          this.props.completeLesson({ lesson, subject })
      }
    }
  }

  render() {
    return <ExerciseModal {...this.props} {...this.state}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
