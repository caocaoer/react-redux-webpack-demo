import { shallow } from 'enzyme';
import React from 'react';
import Home from './home';

describe('<Layout />', () => {
  const wrapper = shallow(<Home />);
  it('should contain div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
});
