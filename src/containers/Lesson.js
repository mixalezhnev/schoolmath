import React from 'react';
import ReactMarkdown from 'react-markdown';

const Lesson = ({lessons, params}) => (
  <ReactMarkdown source={lessons[params]['content']}/>
);

export default Lesson;
