import React from 'react';
import {connect} from 'react-redux';
import Article from './Article';
import OverviewProgressContainer from '../containers/OverviewProgressContainer';

const mapStateToProps = (state) => {
  return {data: state.articles.data}
}

const Overview = ({data}) => {
  const articles = data.map((article) =>
    <Article data={article} key={article.id}/>
  );

  return (
    <div>
      <OverviewProgressContainer/>
      <div className='main content'>{articles}</div>
    </div>
  );
}

export default connect(mapStateToProps)(Overview);
