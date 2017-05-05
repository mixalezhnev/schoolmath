import React, {Component} from 'react';
import Navigation from '../Navigation';

import styles from './Subject.css';

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: [
        {
          title: 'Обзор курса',
          subject: '',
          path: `/subject/${this.props.params.subject}/overview`
        },
        {
          title: 'Практикум',
          subject: '',
          path: `/subject/${this.props.params.subject}/practice`
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Navigation pages={this.state.paths}/>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Subject;
