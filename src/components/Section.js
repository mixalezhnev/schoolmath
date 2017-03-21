import React,{Component} from 'react';
import Article from './Article';

export default class Section extends Component {
	render() {
		let articles = this.props.data.map((article) => 
			<Article data={article} key={article.id}/>
		);

    return (
      <div className="main content">
      	{articles}
      </div>	
    );
  }
}
