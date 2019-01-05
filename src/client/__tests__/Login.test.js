import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';
import renderToJson from 'enzyme-to-json';

test('Login render test', () => {
    const component = shallow(<Login/>);
    expect(renderToJson(component)).toMatchSnapshot();
});