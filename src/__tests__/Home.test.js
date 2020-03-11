import React from 'react';
import Home from '../components/Home';
import renderer from 'react-test-renderer';

test('Home render test', () => {
    const component = renderer.create(
        <Home/>
    );
    expect(component.toJSON()).toMatchSnapshot();
});