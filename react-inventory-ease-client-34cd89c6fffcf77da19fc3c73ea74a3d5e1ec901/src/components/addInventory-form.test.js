import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddInventoryForm} from './addInventory-form';

describe('<AddInventoryForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddInventoryForm />);
    });
});