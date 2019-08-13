import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from '../Badge';

describe('Badge', () => {
  it('should render', () => {
    const component = shallow(<Badge />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
