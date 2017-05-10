import React, { Component } from 'react';

import FaClose from 'react-icons/lib/md/close';
import ExerciseManager from '../ExerciseManager';
import ModalStatusBar from './../ModalStatusBar';
import LessonComplete from '../LessonComplete';

import styles from './ExerciseModal.css';
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
     if (nextProps.practice.finished)
       this.completeSound.play();
   }

  checkAnswer = () => {
      const value = this.answerInput.value;

      if (!value.trim()) {
        alert('Введите ваш ответ');
        return;
      }

      if (value == this.props.curExercise.answer) {
        this.sound.play();
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

      this.answerInput.value = '';

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
    <div className={practice.modalState ? styles.visible : styles.hidden}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.close}>
            <FaClose size={30} className={styles.closeIcon}
              onClick={toggleModal}/>
          </div>
          <div>
            <h2 className={styles.title}>{practice.title}</h2>
          </div>
        </div>
        <section className={styles.playground}>
          {practice.completed ? <LessonComplete/> :
            <div className={styles.content}>
              {practice.exercises.length > 0 &&
                <ExerciseManager exercise={curExercise}/>
              }
              <div>
                {curExercise && curExercise.preanswer && <span className={styles.preAnswer}>{curExercise.preanswer}</span>}
                <input ref={ input => this.answerInput = input} disabled={this.state.correctMessageState} className={styles.input}/>
                <span className={styles.postAnswer}>{curExercise && curExercise.postanswer}</span>
              </div>
              {this.state.correctMessageState ?
                <div className={styles.correctMessage}>
                  Правильный ответ!
                </div> :
                  this.state.wrongMessageState ? <div className={styles.errorMessage}>Попробуйте еще раз</div>
              : null }
            </div>
          }
        </section>
        <footer className={styles.footer}>
          <ModalStatusBar exercises={practice.exercises}/>
          {this.state.correctMessageState ?
            <button className={styles.check} onClick={this.switchExercise}>Следующее задание</button> :
              practice.completed ? <button className={styles.check} onClick={toggleModal}>Завершить урок</button> :
            <button className={styles.check} onClick={this.checkAnswer}>Проверить</button>
          }
        </footer>
      </main>
    </div>
    )
  }
}

export default ExerciseModal;
