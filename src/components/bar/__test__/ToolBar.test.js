import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ToolBar from '../ToolBar';

describe('ToolBar', () => {
  it('should render', () => {
    const component = shallow(<ToolBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
