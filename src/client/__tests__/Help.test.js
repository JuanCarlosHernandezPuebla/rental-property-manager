import React from 'react';
import Help from '../components/Help';
import renderer from 'react-test-renderer';

test('Help render test', () => {
    const component = renderer.create(
        <Help/>
    );
    expect(component.toJSON()).toMatchSnapshot();
});