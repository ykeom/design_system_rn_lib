import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Label from '../Label';

describe('Label', () => {
  it('should render', () => {
    const component = shallow(<Label />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
