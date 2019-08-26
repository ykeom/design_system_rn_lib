import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Divider from '../Divider';

describe('Divider', () => {
  it('should render', () => {
    const component = shallow(<Divider />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
