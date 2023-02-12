import React, { Component } from 'react';
import { AppProps, AppState } from '../../types/types';
import Main from '../../router/Main'

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      header: props.header,
    }
  }

  render() {
    return <div className="App">
      <Main />
    </div>
  }
}

export default App;
