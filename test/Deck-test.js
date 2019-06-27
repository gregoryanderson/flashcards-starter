const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should take on a card', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'); 
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);

    expect(deck.cardDeck).to.eql([card1, card2]); 
  });

  it('should be able to count how many cards are in the deck',  () => {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'}); 
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const deck = new Deck([card1, card2]);

    deck.countCards()
    expect(deck.countCards()).to.equal(2)
  })
});
