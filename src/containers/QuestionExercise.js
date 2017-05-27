import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCorrect } from '../store/actions/practice';

import QuestionExercise from '../components/QuestionExercise';

class QuestionExerciseContainer extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.exercise.id != this.props.exercise.id)
      this.setState({
        value: ''
      });
    this.input.focus();
  }

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      value
    });

    this.checkAnswer(value);
  }

  checkAnswer(answer) {
    this.props.setCorrect(answer == this.props.exercise.answer);
  }

  render() {
    return (
      <QuestionExercise {...this.props}
        {...this.state}
        onChange={this.onChange}
        inputRef={el => this.input = el}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionExerciseContainer);