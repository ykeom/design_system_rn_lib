import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DropDown from '../DropDown';

describe('DropDown', () => {
  it('should render', () => {
    const component = shallow(<DropDown />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
