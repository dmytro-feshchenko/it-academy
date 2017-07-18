import React from 'react';
import Footer from '../src/components/Footer';
import renderer from 'react-test-renderer';

test('Footer should contain copyright', () => {
    const component = renderer.create(
        <Footer />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});