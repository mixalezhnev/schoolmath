import React from 'react';
import ReactDOM from 'react-dom';

const Auth = () => (
  <div></div>
);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Auth />, div)
});