import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Row from '../Row';

describe('Row', () => {
  it('should render', () => {
    const component = shallow(<Row />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
