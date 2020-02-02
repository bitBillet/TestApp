
import React, { Component } from 'react';
import AppContainer from './src/navigator'
import configStore from './src/store'
import { Provider } from 'react-redux'

const store = configStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
export default App
