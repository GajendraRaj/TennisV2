import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { Score } from '../component/Score';

describe(('Scorer component'), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Score />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one heading', () => {
    expect(wrapper.find('h5').text()).toEqual('Score');
  });

  it('should display default score as Love All', () => {
    expect(wrapper.find('label').text()).toEqual('Love all');
  });
});