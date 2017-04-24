import React, {Component} from 'react';
import {connect} from 'react-redux';
import Article from './Article';
import Mission from '../containers/Mission';

const mapStateToProps = (state) => {
  return {data: state.articles.data}
}

const Overview = ({data}) => {
  const articles = data.map((article) =>
    <Article data={article} key={article.id}/>
  );

  return (
    <div>
      <Mission/>
      <div className='main content'>{articles}</div>
    </div>
  );
}

export default connect(mapStateToProps)(Overview);
