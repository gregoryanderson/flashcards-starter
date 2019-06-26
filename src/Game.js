const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
    this.deck;
    this.round = 0;
  }

  start() {
    this.deckBuilder();
    this.roundBuilder();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.round++;
  };
  

  deckBuilder() {
    this.deck = new Deck(prototypeQuestions.map((card) => {
      return new Card(card);
    }));
  }

  roundBuilder() {
    this.currentRound = new Round(this.deck)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;