import React from 'react';
import Overview from '../components/Overview';
import renderer from 'react-test-renderer';

test('Overview render test', () => {
    const component = renderer.create(
        <Overview/>
    );
    expect(component.toJSON()).toMatchSnapshot();
});