import { shallow } from 'enzyme';
import React from 'react';
import Sidebar from './sidebar';

describe('<Layout />', () => {
  const wrapper = shallow(<Sidebar />);

  it('should contain div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
});
