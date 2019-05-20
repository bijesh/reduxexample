import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/Posts';
import NewPosts from './components/NewPosts';
import PostForm from './components/Postform';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        
        <PostForm/>
        <hr/>
        <Posts/>
        <hr/>
        <NewPosts/>
      </div>
      </Provider>
    );
  }
}

export default App;
