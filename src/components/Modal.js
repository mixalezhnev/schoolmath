import React, {Component} from 'react';
import Button from './Button';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:2403/articles')
      .then(response => response.json())
      .then(articles => {
        const allLessons = [];

        articles.map(article => article.lessons)
        .forEach(lessons => {
          lessons.forEach(lesson => {
            allLessons.push(lesson)
          })
        });

        this.setState({
          data: allLessons
        })
    })
  }

  render() {
    let content = this.state.data.filter((item) => {
      return item.title === this.props.lesson
    });

    return (
      <div className={this.props.isOpened
        ? 'modal'
        : 'modal_hidden'}>
        <div className='modal__body'>
          <div className='modal__header'>
            <h2>{content[0] && content[0].title}</h2>
            <Button className='modal__btn_close' onClick={this.props.close}/>
          </div>
          <div className='modal__content'>
            <p>{content[0] && content[0].content}</p>
          </div>
        </div>
      </div>
    );
  }
}
