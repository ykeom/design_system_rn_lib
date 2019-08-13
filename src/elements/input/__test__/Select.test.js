import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from '../Select';

describe('Select', () => {
  it('should render', () => {
    const component = shallow(<Select />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
