const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function(){
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should know the card being played', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const round = new Round(card);

    round.returnCurrentCard(card);
    expect(round.returnCurrentCard()).to.equal(card)
  });
});