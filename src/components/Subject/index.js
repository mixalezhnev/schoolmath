import React, {Component} from 'react';
import Navigation from '../Navigation';

import styles from './Subject.css';

class Subject extends Component {
  render() {
    const paths = [
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
    return (
      <div>
        <Navigation pages={paths}/>
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Subject;
