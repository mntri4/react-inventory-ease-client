import React from 'react';
import {shallow, mount} from 'enzyme';
import store from '../store';
import SignInPage from './signIn-page';

describe('<SignInPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SignInPage />);
    });
});