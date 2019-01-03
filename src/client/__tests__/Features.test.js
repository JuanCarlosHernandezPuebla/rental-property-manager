import React from 'react';
import Features from '../components/Features';
import renderer from 'react-test-renderer';

test('Features render test', () => {
    const component = renderer.create(
        <Features/>
    );
    expect(component.toJSON()).toMatchSnapshot();
});