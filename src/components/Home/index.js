import React from 'react';
import Navigation from '../Navigation';

const paths = [
  {
    title: 'Обзор курса',
    path: 'home',
  }, {
    title: 'Практикум',
    path: 'practice',
  }, {
    title: 'Прогресс',
    path: 'progress',
  },
];

const Home = ({children}) => (
  <div>
    <Navigation pages={paths}/>
    {children}
  </div>
);

export default Home;
