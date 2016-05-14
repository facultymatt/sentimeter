'use strict';

/**
 * @desc module which attempts to determine a like/ dislike sentiment from text.
 */

// language classifier
const natural = require('natural');
const classifier = new natural.BayesClassifier();
// try each
//natural.PorterStemmer.attach();
natural.LancasterStemmer.attach();

// emoji classifier
const SimpleEmojiClassifier = require('./SimpleEmojiClassifier');

/**
 * @desc test if like/ dislike is expressed in sentance
 */
module.exports = (sentance) => {
  let isEmojiSemtiment = SimpleEmojiClassifier.classify(sentance);
  if (isEmojiSemtiment !== undefined) {
    return isEmojiSemtiment;
  }
  let textClassifier = classifier.classify(sentance) === 'true';
  return textClassifier;
}

// training

// like
classifier.addDocument('love this', true);
classifier.addDocument('heart this', true);
classifier.addDocument('want this', true);
classifier.addDocument('this is awesome', true);
classifier.addDocument('amazing', true);
classifier.addDocument('awesome', true);
classifier.addDocument(':)', true);
classifier.addDocument('cool', true);
classifier.addDocument('want', true);
classifier.addDocument('Yay', true);
classifier.addDocument('happy', true);
classifier.addDocument('haha', true);
classifier.addDocument('ha', true);

// dislike
classifier.addDocument('don\'t like this', false);
classifier.addDocument('stupid', false);
classifier.addDocument('dislike this', false);
classifier.addDocument('hate this', false);
classifier.addDocument('wtf', false);
classifier.addDocument('stop', false);
classifier.addDocument('want to stop', false);
classifier.addDocument(':(', false);
classifier.addDocument('boooo', false);
classifier.addDocument('boo', false);
classifier.addDocument('lame', false);
classifier.addDocument('wacky', false);

// do training
classifier.train();
