import React from 'react';
import { shallow } from 'enzyme';
import { TennisGame } from '../component/TennisGame';
import { Player } from '../component/Player';

describe(('TennisGame component'), () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<TennisGame />);
    });
  
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it("should have two players", () => {
      expect(wrapper.find(Player)).toBeDefined();
    });
});