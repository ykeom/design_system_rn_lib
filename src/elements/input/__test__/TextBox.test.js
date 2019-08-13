import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextBox from '../TextBox';

describe('TextBox', () => {
  it('should render', () => {
    const component = shallow(<TextBox />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
