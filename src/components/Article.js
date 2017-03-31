import React, {Component} from 'react';

export default class Article extends Component {

  onLinkClick = (e) => {
    e.preventDefault();
    
    window.ee.emit('openLesson', e.target.textContent);
  }

  render() {
    const {icon, title, description, lessons} = this.props.data;
    return (
      <div className = 'section subject' >
        <div className='subject__group'>
          <div className='subject__icon'/>
          <a href='' className='subject__title'>{title}</a>
        </div>
        <div className = 'subject__container' >
          <p className='subject__desc'>{description}</p>
          <div className = 'subject__lessons' >
            {lessons.map((lesson, index) => (
              <div className='subject__lesson' key={index}>
                <a href='' onClick={this.onLinkClick}>{lesson.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
