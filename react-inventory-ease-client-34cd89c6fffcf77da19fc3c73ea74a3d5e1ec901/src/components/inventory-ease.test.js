import React from 'react';
import {shallow, mount} from 'enzyme';
import InventoryEase from './inventory-ease';

describe('<InventoryEase />', () => {
    it('Renders without crashing', () => {
        shallow(<InventoryEase />);
    });
});