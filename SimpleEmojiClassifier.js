'use strict';

/**
 * @desc module to check like / dislike sentiment using emojis in a sentance.
 * @see for list of emojis http://unicode.org/emoji/charts/full-emoji-list.html
 * @see https://mathiasbynens.be/notes/es6-unicode-regex
 */

const emojiMap = {
  ':)': true,
  ':(': false,
  '😀': true,
  '👎': false,
  '👍': true,
  '👌': true,
  '❤️': true, // heart, @todo why does it not display in atom?
  '😢': false,
  '😭': false,
  '👏🏾': true,
  '💩': false,
  '😻': true,
  '😿': false
}

module.exports.classify = (sentance) => {
  let foundSentiment;
  Object.keys(emojiMap).forEach((emoji) => {
    if (sentance.indexOf(emoji) >= 0) {
      foundSentiment = emojiMap[emoji];
    }
  });
  return foundSentiment;
}
