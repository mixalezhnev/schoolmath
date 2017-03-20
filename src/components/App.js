import React,{Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Mission from './Mission';
import Section from './Section';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          icon: 'img/percentage.png',
          title: 'Проценты, пропорции и дроби',
          description: 'Здесь будет супер-пупер крутое описание раздела',
          lessons: [
            'Ввдение в степени',
            'Ввдение в пропорции',
            'Ввдение в степени',
            'Ввдение в пропорции',
            'Ввдение в степени',
            'Ввдение в пропорции',
            'Ввдение в степени',
            'Ввдение в пропорции'
          ]
        },
        {
          icon: 'img/natnumbers.png',
          title: 'Натуральные числа и шкалы',
          description: 'Здесь будет супер-пупер крутое описание раздела',
          lessons: [
            'Ввдение в степени',
            'Ввдение в пропорции',
            'Ввдение в степени',
            'Ввдение в пропорции',
            'Ввдение в степени',
            'Ввдение в пропорции',
            'Ввдение в степени',
            'Ввдение в пропорции'
          ]
        }
      ]
    }
  }

  // componentDidMount() {
  //   fetch('articles.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     this.setState({
  //       articles: data 
  //     });
  //   })
  //   .catch(alert);
  // }
  
  render() {
		return (
      <div className="App">
        <Header /> 
        <Navigation />
        <Mission />
        <Section data={this.state.articles} />
      </div>
    );
	}
}