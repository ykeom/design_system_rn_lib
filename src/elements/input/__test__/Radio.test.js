import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Radio from '../Radio';

describe('Radio', () => {
  it('should render', () => {
    const component = shallow(<Radio />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
