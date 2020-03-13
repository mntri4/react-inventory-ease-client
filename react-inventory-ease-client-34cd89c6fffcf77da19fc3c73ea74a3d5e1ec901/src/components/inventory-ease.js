import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import SignUpFormPage from './signUp-form';
import SignInPage from './signIn-page';
import HomePage from './home';
import LandingPage from './landing-page';
import './landing-page.css';

//Main react function that gets rendered in the DOM
//Routes to different pages/components in the app
export default function InventoryEase() {
    return(
        <Router>
                <main role='main'>
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path='/signUp' component={SignUpFormPage} />
                        <Route exact path='/signIn' component={SignInPage} />
                        <Route exact path='/home' component={HomePage} />                                  
                    </Switch>
                </main>
        </Router>
    );
}