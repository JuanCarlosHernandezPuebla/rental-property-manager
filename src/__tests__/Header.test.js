import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';
import renderToJson from 'enzyme-to-json';

test('Header render test', () => {
    const component = shallow(<Header/>);
    expect(renderToJson(component)).toMatchSnapshot();
});