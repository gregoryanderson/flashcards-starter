const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

var round, card1, card2, cards, deck

beforeEach(() => {
    card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    cards = [card1, card2];
    deck = new Deck(cards);
    round = new Round(deck);
})

describe('Round', function() {
  
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should know and return the current card that is being played', () => {
    expect(round.returnCurrentCard()).to.eql(card1);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.eql(card2);
  });

  it('should count all of the the turns', () => {
    round.takeTurn('sea otter')
    expect(round.turns).to.equal(1)
    round.takeTurn('gallbladder')
    expect(round.turns).to.equal(2)
  });

  it('should have methods that create new turns', () => {
    expect(round.createNewTurn()).to.be.an.instanceOf(Turn)
  });

  it('should be able to evaluate a correct guess', () => {
    expect(round.takeTurn('sea otter')).to.equal('Great Job!')
  });

  it('should be able to evaluate an incorrect guess', () => {
    expect(round.takeTurn('capybara')).to.equal('Read a book..')
  })

  it('should store incorrect guesses within an array', () => {
    expect(round.takeTurn('capybara')).to.equal('Read a book..')
    expect(round.incorrectGuesses.length).to.equal(1)
    expect(round.incorrectGuesses[0]).to.equal(1)
  })

  it('should calculate a percentage of correct answers given', () => {
    expect(round.takeTurn('capybara')).to.equal('Read a book..');
    expect(round.takeTurn('gallbladder')).to.equal('Great Job!');
    expect(round.incorrectGuesses.length).to.equal(1)
    expect(round.calculatePercent()).to.equal(50);
  });
});