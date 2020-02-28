import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchIdForm} from './searchId-form';

describe('<SearchIdForm />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchIdForm />);
    });
});