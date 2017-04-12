import React, {Component} from 'react';
import {connect} from 'react-redux';
import Article from './Article';
import Mission from './Mission';

const mapStateToProps = (state) => {
  return {data: state.articles.data}
}

class Overview extends Component {
  render() {
    const articles = this.props.data.map((article) => <Article data={article} key={article.id}/>);

    return (
      <div>
        <Mission/>
        <div className='main content'>{articles}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Overview);
