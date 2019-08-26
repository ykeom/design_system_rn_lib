import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timeline from '../Timeline';

describe('Timeline', () => {
  it('should render', () => {
    const component = shallow(<Timeline />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
