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
  let wrapper, scoreLabel, player1ScoreButton, player2ScoreButton;
  beforeEach(() => {
    wrapper = mount(<TennisGame />);
    scoreLabel = wrapper.find('Score').find("label");
    player1ScoreButton = wrapper.find('Player').at(0).find("button");
    player2ScoreButton = wrapper.find('Player').at(1).find("button");
  });
  
  it("On Player 1 Scores once, Score Should be Fifteen Love", () => {
    player1ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Fifteen, Love");
  });

  it("On Player 1 Scores twice, Score Should be Thirty Love", () => {
    clickHandler(player1ScoreButton, 2);
    expect(scoreLabel.text()).toEqual("Thirty, Love");
  });

  it("On Player 1 Scores thrice, Score Should be Forty Love", () => {
    clickHandler(player1ScoreButton, 3);
    expect(scoreLabel.text()).toEqual("Forty, Love");
  });

  it("On Player 2 Scores once, Score Should be Love Fifteen", () => {
    clickHandler(player2ScoreButton, 1);
    expect(scoreLabel.text()).toEqual("Love, Fifteen");
  });

  it("On both Players Scores once, Score Should be Fifteen all", () => {
    clickHandler(player1ScoreButton, 1);
    clickHandler(player2ScoreButton, 1);
    expect(scoreLabel.text()).toEqual("Fifteen all");
  });

  it("On both Players Scores thrice, Score Should be Deuce", () => {
    clickHandler(player1ScoreButton, 3);
    clickHandler(player2ScoreButton, 3);
    expect(scoreLabel.text()).toEqual("Deuce");
  });

  it("On Player 1 Scores four times and Player 2 Scores thrice, Score Should be Advantage Player 1", () => {
    clickHandler(player1ScoreButton, 3);
    clickHandler(player2ScoreButton, 3);
    player1ScoreButton.simulate('click');
    expect(scoreLabel.text()).toEqual("Advantage Player 1");
  });

  it("On Player 1 Scores thrice and Player 2 Scores four times, Score Should be Advantage Player 2", () => {
    clickHandler(player1ScoreButton, 3);
    clickHandler(player2ScoreButton, 4);
    expect(scoreLabel.text()).toEqual("Advantage Player 2");
  });

  it("On Player 1 Scores four times, Score Should be Player 1 wins", () => {
    clickHandler(player1ScoreButton, 4);
    expect(scoreLabel.text()).toEqual("Player 1 wins");
  });

  it("On Player 1 Scores thrice and Player 2 scores five times, Score Should be Player 2 wins", () => {
    clickHandler(player1ScoreButton, 3);
    clickHandler(player2ScoreButton, 5);
    expect(scoreLabel.text()).toEqual("Player 2 wins");
  });

  it("On Reset the Game, Score Should be Love All", () => {
    clickHandler(player1ScoreButton, 2);
    clickHandler(player2ScoreButton, 2);
    wrapper.find("button").at(2).simulate('click');
    expect(wrapper.find('Score').find('label').text()).toEqual("Love all");
  });

});

function clickHandler(button, times) {
  for (let index = 0; index < times; index++) {
    button.simulate('click');
  }
}