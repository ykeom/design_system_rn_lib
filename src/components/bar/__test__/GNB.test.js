import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GNB from '../GNB';

describe('GNB', () => {
  it('should render', () => {
    const component = shallow(<GNB />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
