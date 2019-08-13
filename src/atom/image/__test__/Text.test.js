import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Image from '../Image';

describe('Image', () => {
  it('should render', () => {
    const component = shallow(<Image />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
