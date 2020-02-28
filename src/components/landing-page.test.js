import React from 'react';
import {shallow, mount} from 'enzyme';
import store from '../store';
import LandingPage from './landing-page';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });
});