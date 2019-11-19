import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/navigation/navigation'
import Gallery from './components/gallery/gallery';
import Posts from './components/posts/posts';
import Todos from './components/todos/todos';
import Profile from './components/profile/profile';
import Login from './components/profile/login';

import profileOrLogin from './decorators/hocProfile';
import galleryWithRequest from './decorators/hocGallery';
import postsWithRequest from './decorators/hocPosts';
import todosWithRequest from './decorators/hocTodos';
import hocLogin from './decorators/hocLogin';
import './App.css';

function App() {

  localStorage.setItem('isLogin', 1);
  
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={galleryWithRequest(Gallery)} />
        <Route path="/posts" component={postsWithRequest(Posts)} />
        <Route path="/profile" component={profileOrLogin(Profile)} />
        <Route path="/todos" component={todosWithRequest(Todos)} /> 
        <Route path="/login" component={hocLogin(Login)} /> 
      </Switch>
    </BrowserRouter>

  );
}

export default App;
