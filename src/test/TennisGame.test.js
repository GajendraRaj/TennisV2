import React from 'react';
import { shallow } from 'enzyme';
import { TennisGame } from '../component/TennisGame';
import { Player } from '../component/Player';
import { Score } from '../component/Score';

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

    it('should have one score', () => {
      expect(wrapper.find(Score)).toBeDefined();
    });
});
