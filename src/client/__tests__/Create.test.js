import React from 'react';
import { shallow } from 'enzyme';
import Create from '../components/Create';
import renderToJson from 'enzyme-to-json';

test('Create render test', () => {
    const component = shallow(<Create/>);
    expect(renderToJson(component)).toMatchSnapshot();
});