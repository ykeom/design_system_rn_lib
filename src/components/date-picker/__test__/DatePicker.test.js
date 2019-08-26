import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DatePicker from '../DatePicker';

describe('DatePicker', () => {
  it('should render', () => {
    const component = shallow(<DatePicker />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
