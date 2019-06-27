const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

var turn, turn1, turn2, card

beforeEach(() => {
    turn = new Turn();
    card = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'})
    turn1 = new Turn('Guess', card);
    turn2 = new Turn('object', card);
})

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should be able to accept a guess', () => {
    expect(turn1.guess).to.equal('Guess')
  });

  it('should be able to accept a card object', () => {
    expect(turn1.card).to.equal(card)
  });

  it('should return the guess', () => {
    expect(turn1.returnGuess()).to.equal('Guess')
  });

  it('should return the card', () => {
    expect(turn1.returnCard()).to.equal(card)
  });

  it('should be able to evaluate a guess', () => {
    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    turn2.evaluateGuess();
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback', () => {
    turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('Read a book..');
    turn2.giveFeedback();
    expect(turn2.giveFeedback()).to.equal('Great Job!')
  });
});

