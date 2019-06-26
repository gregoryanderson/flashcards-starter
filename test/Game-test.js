const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function(){
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should know what round we are in', function(){
    const game = new Game();
    game.start();
  
    expect(game.round).to.equal(1)
  });

  it('should create new cards in the beginning of the game', () => {
    const game = new Game();
    game.start();

    expect(game.deck.cardDeck.length).to.equal(30);
  });

  
});