import React, { Component } from 'react';

import ExerciseManager from '../ExerciseManager';
import ModalStatusBar from './../ModalStatusBar';
import LessonComplete from '../LessonComplete';

import styles from './ExerciseModal.css';
import FaClose from 'react-icons/lib/md/close';
import exerciseComplete from './exercise-complete.wav';
import lessonComplete from './lesson-complete.mp3';

class ExerciseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctMessageState: false,
      wrongMessageState: false,
    }

    this.sound = new Audio(exerciseComplete);
    this.completeSound = new Audio(lessonComplete);
   }

   componentWillReceiveProps(nextProps) {
     if (nextProps.practice.lessonFinished)
       this.completeSound.play();
   }

   handleKeyPress = (e) => {
    const {exerciseFinished, lessonFinished} = this.props.practice;
    if (e.key == 'Enter')
      if (exerciseFinished)
        this.nextBtn.click();
      else 
        this.checkBtn.click();
        
   }

  checkAnswer = () => {
    const { isCorrectAnswer } = this.props.practice;

    if (isCorrectAnswer) {
      this.sound.play();
      this.props.finishExercise();
      this.setState({
        correctMessageState: true,
        wrongMessageState: false
        });
      } else {
        this.setState({
          wrongMessageState: true
        });
      }
    }

    switchExercise = () => {
      const { subject, lesson } = this.props.practice;

      this.setState({
        correctMessageState: false,
        wrongMessageState: false
      });

      this.props.getNext({
        id: this.props.curExercise.id,
        subject,
        lesson
       });
    }

render() {
  const { practice,
              toggleModal,
              curExercise
            } = this.props;

  window.document.body.style.overflow = practice.modalState ?  'hidden' : '';

  return (
    <div
      className={practice.modalState ? styles.visible : styles.hidden}
      onKeyPress={this.handleKeyPress}
      >
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.close}>
            <div className={styles.closeIcon}
              onClick={toggleModal}>
            </div>
          </div>
          <div>
            <h2 className={styles.title}>{practice.title}</h2>
          </div>
        </section>
        <section className={styles.playground}>
          {practice.completed ? <LessonComplete/> :
            <div className={styles.content}>
              {practice.exercises.length > 0 &&
                <ExerciseManager exercise={curExercise}/>
              }
            </div>
          }
        </section>
        <footer className={styles.footer}>
          <ModalStatusBar exercises={practice.exercises}/>
          <div className={styles.checkBtn}>
            {this.state.correctMessageState ?
              <div className={styles.correctMessage}>
              Правильный ответ!
              </div> :
              this.state.wrongMessageState ? <div className={styles.errorMessage}>Попробуйте еще раз</div>
              : null }
              {this.state.correctMessageState ?
                <button className={styles.check}
                  onClick={this.switchExercise}
                  ref={button => this.nextBtn = button}>
                    Следующее задание
                </button> :
                practice.completed ?
                  <button 
                    ref={button => this.endBtn = button}
                    className={styles.check} 
                    onClick={toggleModal}>
                    Завершить урок
                  </button> :
                <button 
                  ref={button => this.checkBtn = button}
                  className={styles.check}
                  onClick={this.checkAnswer}>Проверить</button>
              }
            </div>  
        </footer>
      </main>
    </div>
    )
  }
}

export default ExerciseModal;
