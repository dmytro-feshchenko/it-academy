import React from 'react';
import Header from '../src/components/Header';
import renderer from 'react-test-renderer';

test('Header contains navigation menu', () => {
    const component = renderer.create(
        <Header />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


});