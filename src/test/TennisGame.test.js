import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe(('TennisGame functionality'), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TennisGame />);
  });
  
  it("On Player 1 Scores once, Score Should be Fifteen Love", () => {
    wrapper.find('Player').at(0).find('button').simulate('click');
    expect(wrapper.find('Score').find('label').text()).toEqual("Fifteen, Love");
  });

});
