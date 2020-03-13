import React from 'react';
import {shallow, mount} from 'enzyme';

import {SignInForm} from './signIn-form';

describe('<SignInForm />', () => {
    it('Renders without crashing', () => {
        shallow(<SignInForm />);
    });
});