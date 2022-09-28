import { shallow } from 'enzyme';
import React from 'react';
import Login from './login';

describe('<Layout />', () => {
  const wrapper = shallow(<Login />);

  it('should contain div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
});
