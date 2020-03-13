import React from 'react';
import {shallow, mount} from 'enzyme';

import {HomePage} from './home';

describe('<HomePage />', () => {
    it('Renders without crashing', () => {
        shallow(<HomePage />);
    });
});