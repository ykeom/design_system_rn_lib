import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Col from '../Col';

describe('Col', () => {
  it('should render', () => {
    const component = shallow(<Col />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
