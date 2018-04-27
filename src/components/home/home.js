import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PeopleService from "../../common/database/people/peopleService";

var peoples = PeopleService.findAll();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);

  }

  updateList() {
    this.setState({ peopleList: PeopleService.findAll() });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Lista Persone{"\n"}
          {peoples[0].surname}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});