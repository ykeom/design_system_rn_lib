import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from '../Icon';

describe('Icon', () => {
  it('should render', () => {
    const component = shallow(<Icon />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
