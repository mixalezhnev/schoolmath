import React, {Component} from 'react';
import styles from './Lesson.css';

class Lesson extends Component {
  componentDidMount() {
    this.props.getLesson(this.props.params.lesson);
  }

  render() {
    const {content, title} = this.props.lesson;

    return (
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {
          content.split('.').map((p, i) =>
            <p className={styles.paragraph} key={i}>{p}.</p>
          )
        }
      </div>
    );
  }
}

export default Lesson;
