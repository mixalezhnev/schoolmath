import React, {Component} from 'react';
import NavItem from './NavItem';

export default class NavItemContainer extends Component {
  render() {
    return (
      <NavItem {...this.props}/>
    );
  }
}
