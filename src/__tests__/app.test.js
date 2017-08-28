import React from 'react';
// "mount" does full render including children
// "shallow" does just the parent
import { shallow /*, mount*/ } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { App } from '../App';

describe('App', () => {
    
        it('adds a number', () => {
            // const wrapper = shallow(<App value="1" />);
            // expect(toJSON(wrapper)).toMatchSnapshot();
        });
    
    });