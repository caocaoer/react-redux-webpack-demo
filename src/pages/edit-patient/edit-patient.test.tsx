import { shallow } from 'enzyme';
import React from 'react';
import EditPatient from './edit-patient';

describe('<Layout />', () => {
  const wrapper = shallow(<EditPatient />);
  it('should contain div', () => {
    expect(wrapper.find('div')).toBeTruthy();
  });
});
