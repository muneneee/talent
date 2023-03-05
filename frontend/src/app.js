import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./containers/home";
import Login from "./containers/login";
import Signup from "./containers/signup";
import Activate from "./containers/activate";
import ResetPassword from "./containers/resetpassword";
import ResetPasswordConfirm from "./containers/resetpasswordconfirm";

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />

                </Switch>
            </Layout>
        </Router>
    </Provider>
    );

export default App;