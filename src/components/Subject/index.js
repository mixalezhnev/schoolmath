import React, {Component} from 'react';
import Navigation from '../Navigation';

import styles from './Subject.css';

class Subject extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    const curSubject = this.props.params.subject;
    const paths = [
      {
        title: 'Обзор курса',
        subject: '',
        path: `/subject/${curSubject}/overview`
      },
      {
        title: 'Практикум',
        subject: '',
        path: `/subject/${curSubject}/practice`
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
