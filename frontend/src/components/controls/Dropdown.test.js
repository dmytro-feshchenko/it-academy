import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

it("renders correctly with items", () => {
    const items = [
        {
            key: '1',
            label: 'Option 1'
        },
        {
            key: '2',
            label: 'Option 2'
        }
    ];

    const tree = renderer.create(
        <Dropdown items={items}/>
    );
    expect(tree).toMatchSnapshot();
});