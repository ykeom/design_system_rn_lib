import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CheckBox from '../CheckBox';

describe('CheckBox', () => {
  it('should render', () => {
    const component = shallow(<CheckBox />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
