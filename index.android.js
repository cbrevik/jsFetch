/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './Core'

export default class jsFetch extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('jsFetch', () => jsFetch);