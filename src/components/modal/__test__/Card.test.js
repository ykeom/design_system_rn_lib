import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from '../Modal';

describe('Modal', () => {
  it('should render', () => {
    const component = shallow(<Modal />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
