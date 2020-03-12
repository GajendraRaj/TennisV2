import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { TennisGame } from '../component/TennisGame';

describe(('<App/> component'), () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the title', () => {
    expect(wrapper.find('h1').text()).toBe('Tennis Game');
  });
  
  it("should load TennisGame component", () => {
    expect(wrapper.find(TennisGame)).toBeDefined();
  });

});
