const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function(){
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should know and return the current card that is being played', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.eql(card1);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.eql(card2);
  });

  it('should count all of the the turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    round.takeTurn('sea otter')
    expect(round.turns).to.equal(1)
    round.takeTurn('gallbladder')
    expect(round.turns).to.equal(2)
  });

  it('should have methods that create new turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.createNewTurn()).to.be.an.instanceOf(Turn)
  });

  it('should be able to evaluate a correct guess', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.equal('Great Job!')
  });

  it('should be able to evaluate an incorrect guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.takeTurn('capybara')).to.equal('Read a book..')
  })

  it('should store incorrect guesses within an array', function() {
    const card1 = new Card({id: 12, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.takeTurn('capybara')).to.equal('Read a book..')
    expect(round.incorrectGuesses.length).to.equal(1)
    expect(round.incorrectGuesses[0]).to.equal(12)
  })

  it('should calculate a percentage of correct answers given', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const cards = [card1, card2]
    const deck = new Deck(cards);
    const round = new Round(deck);

    expect(round.takeTurn('capybara')).to.equal('Read a book..');
    expect(round.takeTurn('gallbladder')).to.equal('Great Job!');
    expect(round.incorrectGuesses.length).to.equal(1)
    expect(round.calculatePercent()).to.equal(50);
  });
});