import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';


import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate';
import About from './pages/About';
import Blog from './pages/Blog';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';


function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    
    // <Provider store={store}>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route exact path='/reset-password' element={<ResetPassword/>} />
              <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
              <Route exact path='/activate/:uid/:token' element={<Activate/>} />

          </Routes>
    
  );
}

export default App;
