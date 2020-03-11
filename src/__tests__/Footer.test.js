import React from 'react';
import Footer from '../components/Footer';
import renderer from 'react-test-renderer';

test('Footer render test', () => {
    const component = renderer.create(
        <Footer/>
    );
    expect(component.toJSON()).toMatchSnapshot();
});