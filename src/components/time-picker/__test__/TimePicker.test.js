import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker from '../TimePicker';

describe('TimePicker', () => {
  it('should render', () => {
    const component = shallow(<TimePicker />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
