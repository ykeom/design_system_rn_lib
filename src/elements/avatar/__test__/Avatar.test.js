import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Avatar from '../Avatar';

describe('Avatar', () => {
  it('should render', () => {
    const component = shallow(<Avatar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
