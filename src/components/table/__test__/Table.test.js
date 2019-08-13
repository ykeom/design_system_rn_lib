import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from '../Table';

describe('Table', () => {
  it('should render', () => {
    const component = shallow(<Table />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
