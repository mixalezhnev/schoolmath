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
        <div className="content mission">
          <h2><a href="#" className="mission__text">Начать миссию</a></h2>
        </div>
        <main className="main content">
          <section className="section fr">
            <div className="subject__icon"></div>
            <div className="subject fc-1">
              <h3 className="subject__title fc-11"><a href="">Проценты, пропорции и дроби</a></h3>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
            </div>
            <aside className="lessons fc-1 fr">
              <ul className="lessons__list">
                <li><a href="#">Введние в проценты</a></li>
                <li><a href="#">Введение в дроби</a></li>
                <li><a href="#">Сложение дробей</a></li>
              </ul>
              <ul className="lessons__list">
                <li><a href="#">Введние в проценты</a></li>
                <li><a href="#">Введение в дроби</a></li>
                <li><a href="#">Сложение дробей</a></li>
              </ul>
            </aside>
          </section>
          <section className="section fr">
            <div className="subject__icon"></div>
            <div className="subject fc-4">
              <h3 className="subject__title fc-11"><a href="">Проценты, пропорции и дроби</a></h3>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
            </div>
            <aside className="lessons fc-4 fr">
              <ul className="lessons__list">
                <li><a href="#">Введние в проценты</a></li>
                <li><a href="#">Введение в дроби</a></li>
                <li><a href="#">Сложение дробей</a></li>
              </ul>
              <ul className="lessons__list">
              <li><a href="#">Введние в проценты</a></li>
              <li><a href="#">Введение в дроби</a></li>
              <li><a href="#">Сложение дробей</a></li>
              </ul>
            </aside>
          </section>
          <section className="section fr">
            <div className="subject__icon"></div>
            <div className="subject fc-4">
              <h3 className="subject__title fc-11"><a href="">Проценты, пропорции и дроби</a></h3>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
            </div>
            <aside className="lessons fc-4 fr">
              <ul className="lessons__list">
                <li><a href="#">Введние в проценты</a></li>
                <li><a href="#">Введение в дроби</a></li>
                <li><a href="#">Сложение дробей</a></li>
              </ul>
              <ul className="lessons__list">
                <li><a href="#">Введние в проценты</a></li>
                <li><a href="#">Введение в дроби</a></li>
                <li><a href="#">Сложение дробей</a></li>
              </ul>
            </aside>
          </section>
          {/*<section className="section fr">
                     <div className="subject__icon"></div>
                     <div className="subject fc-4">
                      <h3 className="subject__title fc-11"><a href="">Проценты, пропорции и дроби</a></h3>
                      <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
                    </div>
                    <aside className="lessons fc-4 fr">
                      <ul className="lessons__list">
                        <li><a href="#">Введние в проценты</a></li>
                        <li><a href="#">Введение в дроби</a></li>
                        <li><a href="#">Сложение дробей</a></li>
                      </ul>
                      <ul className="lessons__list">
                        <li><a href="#">Введние в проценты</a></li>
                        <li><a href="#">Введение в дроби</a></li>
                        <li><a href="#">Сложение дробей</a></li>
                      </ul>
                    </aside>
                  </section>
                  <section className="section fr">
                   <div className="subject__icon"></div>
                   <div className="subject fc-4">
                    <h3 className="subject__title fc-11"><a href="">Проценты, пропорции и дроби</a></h3>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eveniet reiciendis voluptates, maxime, quasi alias harum veniam animi ipsa unde non, adipisci ad dolorum dolorem. Rerum perferendis dolores exercitationem delectus ullam a error, libero reprehenderit molestiae corrupti in quasi, dolor ex. Vitae consequatur fugit porro, mollitia eveniet assumenda iste repellendus.</p>
                  </div>
                  <aside className="lessons fc-4 fr">
                    <ul className="lessons__list">
                      <li><a href="#">Введние в проценты</a></li>
                      <li><a href="#">Введение в дроби</a></li>
                      <li><a href="#">Сложение дробей</a></li>
                    </ul>
                    <ul className="lessons__list">
                      <li><a href="#">Введние в проценты</a></li>
                      <li><a href="#">Введение в дроби</a></li>
                      <li><a href="#">Сложение дробей</a></li>
                    </ul>
                  </aside>
                </section>*/}
    </main>
  </div>
		);
	}
}