import React from 'react';
import {shallow, mount} from 'enzyme';

import {SignUpFormPage} from './signUp-form';

describe('<SignUpFormPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SignUpFormPage />);
    });
});