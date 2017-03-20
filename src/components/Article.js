import React from 'react';

export default class Article extends React.Component {
  render() {
  	const {icon, title, description, lessons} = this.props.data;

    return (
    	<div className="section subject">
    		<div className="subject__group">
    			<div className="subject__icon"></div>
    			<a href="#" className="subject__title">{title}</a>
    		</div>
    		<div className="subject__container">
    			<p className="subject__desc">{description}</p>
    			<div className="subject__lessons">
    				{lessons.map((lesson, index) => 
    					<div className="subject__lesson" key={index}><a href="#">{lesson}</a></div>
    				)}
    			</div>
    		</div>
    	</div>
    );
  }
}
