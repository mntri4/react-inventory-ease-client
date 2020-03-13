import React from 'react';
import {shallow, mount} from 'enzyme';

import SearchAll from './searchAll';

describe('<SearchAll />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchAll autos={[]} />);
    });
});