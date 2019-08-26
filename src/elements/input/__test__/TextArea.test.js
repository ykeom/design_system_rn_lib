import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextArea from '../TextArea';

describe('TextArea', () => {
  it('should render', () => {
    const component = shallow(<TextArea />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
