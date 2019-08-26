import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tab from '../Tab';

describe('Tab', () => {
  it('should render', () => {
    const component = shallow(<Tab />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
