import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Indicator from '../Indicator';

describe('Indicator', () => {
  it('should render', () => {
    const component = shallow(<Indicator />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
