import React from 'react';
import {shallow, mount} from 'enzyme';

import {HandleLogIn} from './handle-login';

describe('<HandleLogIn />', () => {
    it('Renders without crashing', () => {
        shallow(<HandleLogIn />);
    });
});