import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Overlay from '../Overlay';

describe('Overlay', () => {
  it('should render', () => {
    const component = shallow(<Overlay />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
