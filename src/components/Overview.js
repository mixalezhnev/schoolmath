import React, {Component} from 'react';
import Article from './Article';
import Mission from './Mission';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:2403/articles')
      .then(response => response.json())
      .then(articles => {
        this.setState({articles});
      })
      .catch(err => {
        console.log(`error in fetch: ${err.message}`);
      });
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
