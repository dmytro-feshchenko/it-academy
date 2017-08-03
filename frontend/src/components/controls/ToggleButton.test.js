import React from 'react';
import renderer from 'react-test-renderer';
import ToggleButton from './ToggleButton';

it("renders correctly without checked prop", () => {

    const tree = renderer.create(
        <ToggleButton label="Select" checkedLabel="Deselect" />
    );
    expect(tree).toMatchSnapshot();
});

it("renders correctly with checked prop", () => {

    const tree = renderer.create(
        <ToggleButton label="Select" checkedLabel="Deselect" checked={true} />
    );
    expect(tree).toMatchSnapshot();
});

