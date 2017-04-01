import React, {Component} from 'react';
import Article from './Article';
import Mission from './Mission';
import fetchData from '../api/fetchData';

export default class Overview extends Component {
  /**
   * ES7 syntax (without constructor)
   */
  state = {
    articles: []
  }

  componentDidMount() {
    fetchData.call(this, 'http://localhost:2403/articles');
  }

  render() {
    let articles = this.state.articles.map((article) =>
      <Article data={article} key={article.id}/>);

    return (
      <div>
        <Mission/>
        <div className='main content'>{articles}</div>
      </div>
    );
  }
}
