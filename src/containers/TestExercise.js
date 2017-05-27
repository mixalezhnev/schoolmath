import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCorrect } from '../store/actions/practice';

import TestExercise from '../components/TestExercise';

class TestExerciseContainer extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.exercise.id != this.props.exercise.id)
      this.setState({
        selectedValue: null
      });
  }


  onChange = (e) => {
    const selectedValue = e.target.value;

    this.setState({
      selectedValue
    });

    this.checkAnswer(selectedValue);
  }

  checkAnswer(index) {
    this.props.setCorrect(index == this.props.exercise.answer);
  }

  render() {
    return (
      <TestExercise variants={this.props.exercise.variants}
        finished={this.props.finished}
        onChange={this.onChange}
        selected={this.state.selectedValue}/>
    );
  }

}

const mapStateToProps = ({ practice }) => ({
  finished: practice.exerciseFinished
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setCorrect
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TestExerciseContainer);
