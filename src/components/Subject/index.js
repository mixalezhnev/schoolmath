import React from 'react';
import Navigation from '../Navigation';

import styles from './Subject.css';

const paths = [
  {
    title: 'Обзор курса',
    path: '/overview'
  },
  {
    title: 'Практикум',
    path: '/practice'
  }
];

const Subject = ({params, children}) => (
  <Navigation pages={paths}/>
)

export default Subject;
