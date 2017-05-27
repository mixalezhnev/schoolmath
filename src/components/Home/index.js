import React from 'react';

import Navigation from '../Navigation';
import Header from '../Header';

const paths = [
  {
    title: 'Обзор курса',
    path: '/overview',
  }, {
    title: 'Практикум',
    path: '/practice',
  }, {
    title: 'Прогресс',
    path: '/progress',
  },
];

const Home = ({ children }) => (
  <div>
    <Header flag='home'/>
    <Navigation pages={paths}/>
    {children}
  </div>
);

export default Home;
