import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '../Text';

describe('Text', () => {
  it('should render', () => {
    const component = shallow(<Text />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
