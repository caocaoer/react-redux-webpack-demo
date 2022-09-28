import { shallow } from 'enzyme';
import React from 'react';
import Layout from './layout';

import Sidebar from '@/components/sidebar/sidebar';

describe('<Layout />', () => {
  const wrapper = shallow(<Layout />);

  it('should contain Sidebar', () => {
    setTimeout(() => {
      expect(wrapper.find(Sidebar).exists()).toBeTruthy();
    }, 500);
  });

  it('should contain div', () => {
    expect(wrapper.find('div').exists()).toBeTruthy();
  });
});
