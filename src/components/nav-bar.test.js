import React from 'react';
import {shallow, mount} from 'enzyme';
import store from '../store';
import {NavBar} from './nav-bar';

describe('<NavBar />', () => {
    it('Renders without crashing', () => {
        shallow(<NavBar />);
    });
});