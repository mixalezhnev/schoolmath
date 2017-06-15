import React from 'react';
import ReactDOM from 'react-dom';

const Article = () => (
  <div></div>
);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Article />, div)
});