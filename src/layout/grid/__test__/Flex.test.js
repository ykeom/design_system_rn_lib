import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from '../Layout';

describe('Layout', () => {
  it('should render', () => {
    const component = shallow(<Layout />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
