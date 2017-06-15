import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { toggleModal, updateExercise, finishExercise } from '../store/actions/practice';
import { completeLesson } from '../store/actions/practice';

import { connect } from 'react-redux';

import ExerciseModal from '../components/ExerciseModal';

const mapStateToProps = ({ practice }) => ({
  practice
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleModal,
    finishExercise,
    getNext: updateExercise,
    completeLesson,
  }, dispatch)
})

class Modal extends Component {
  state = {
    curExercise: null
  }

  static propTypes = {
    toggleModal: PropTypes.func.isRequired
  };

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
