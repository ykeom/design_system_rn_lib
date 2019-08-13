import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppBar from '../AppBar';

describe('AppBar', () => {
  it('should render', () => {
    const component = shallow(<AppBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
