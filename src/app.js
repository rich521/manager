import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyAtqVaNeNyfwdiOOtug_TrvKIRPlXm-p7Q',
        authDomain: 'manager-d9dfd.firebaseapp.com',
        databaseURL: 'https://manager-d9dfd.firebaseio.com',
        storageBucket: 'manager-d9dfd.appspot.com',
        messagingSenderId: '110738232252'
      };

      firebase.initializeApp(config);
    }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
