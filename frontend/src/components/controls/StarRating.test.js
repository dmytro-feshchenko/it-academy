import React from 'react';
import renderer from 'react-test-renderer';
import StarRating from './StarRating';

it("renders correctly", () => {

    const tree = renderer.create(
        <StarRating />
    );
    expect(tree).toMatchSnapshot();
});