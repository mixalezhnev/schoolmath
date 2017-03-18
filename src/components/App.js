import React,{Component} from 'react';

export default class App extends Component {
	render() {
		return (
      <div className="App">
        <header className="header">
          <div className="content">
            <div className="header__group">
              <div className="logo">
                <img src="img/logo.svg" className="logo__image" alt="math starts here"/>
              </div>
              <div className="sign-in">
                <a href="#" className="sign-in__link">Войти</a>
              </div>
            </div>
          </div>
        </header>
        <nav className="navigation">
          <a className="navigation__link navigation__link_active">Обзор курса</a>
          <a className="navigation__link">Практикум</a>
          <a className="navigation__link">Прогресс</a>
        </nav>
        <div className="mission">
          <a href="#" className="mission__text">Начать миссию</a>
        </div>
        <main className="main content">
          <section className="section subject">
            <div className="subject__group">
              <div className="subject__icon"></div>
              <a href="#" className="subject__title">Проценты, пропорции и дроби</a>
            </div>
            <div className="subject__container">
              <p className="subject__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
              <div className="subject__lessons">
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
              </div>
            </div>
          </section>
          <section className="section subject">
            <div className="subject__group">
              <div className="subject__icon"></div>
              <a href="#" className="subject__title">Проценты, пропорции и дроби</a>
            </div>
            <div className="subject__container">
              <p className="subject__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
              <div className="subject__lessons">
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
              </div>
            </div>
          </section>
          <section className="section subject">
            <div className="subject__group">
              <div className="subject__icon"></div>
              <a href="#" className="subject__title">Проценты, пропорции и дроби</a>
            </div>
            <div className="subject__container">
              <p className="subject__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
              <div className="subject__lessons">
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
                <div className="subject__lesson"><a href="#">Введение в степени</a></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
	}
}