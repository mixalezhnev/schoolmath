import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TestExercise from '../components/TestExercise';

export default class TestExerciseContainer extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  checkAnswer() {
    // ...
  }

  render() {
    return (
      <TestExercise/>
    );
  }

}
