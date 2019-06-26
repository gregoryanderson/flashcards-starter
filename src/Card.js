class Card {
  constructor (cardObject = {}) {
    this.id = cardObject.id;
    this.question = cardObject.question;
    this.answers = cardObject.answers;
    this.correctAnswer = cardObject.correctAnswer;
  }
}

module.exports = Card