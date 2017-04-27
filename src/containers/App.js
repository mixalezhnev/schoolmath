import React, {Component} from 'react';
// import Modal from './Modal';
import Header from '../components/Header';

import Section from '../components/Section';
import Overview from '../components/Overview';
import Practice from '../components/Practice';
import Progress from '../components/Progress';
import NotFound from '../components/404';

import {connect} from 'react-redux';
import getArticles from '../store/actions/articles';

import {Router, Route, browserHistory} from 'react-router';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      dispatch(getArticles())
    }
  }
}

// const mapStateToProps = (state) => {
//   return {
//     data: state.articles.data
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isModalOpened: false,
      // currentLesson: '',
      pages: [
        {
          title: 'Обзор курса',
          path: '/'
        }, {
          title: 'Практикум',
          path: '/practice'
        }, {
          title: 'Прогресс',
          path: '/progress'
        },
      ],
    };
  }

  // toggleModal = () => {
  //   this.setState({
  //     isModalOpened: !this.state.isModalOpened
  //   });
  // }

  componentDidMount() {
    this.props.getData();

    // window.ee.addListener('openLesson', (title) => {
    //   this.setState({currentLesson: title});
    //   this.toggleModal();
    // });
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Router history={browserHistory}>
          <Route component={Section} pages={this.state.pages}>
            <Route path='/' component={Overview}/>
            <Route path='practice' component={Practice}/>
            <Route path='progress' component={Progress}/>
            <Route path='*' component={NotFound}/>
          </Route>
        </Router>
        {/*<Modal isOpened={this.state.isModalOpened} close={this.toggleModal} lesson={this.state.currentLesson} articles={this.props.data}/>*/}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
