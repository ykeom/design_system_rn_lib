import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Chip from '../Chip';

describe('Chip', () => {
  it('should render', () => {
    const component = shallow(<Chip />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
