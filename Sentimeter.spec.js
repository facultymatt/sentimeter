'use strict';

const test = require('tape');
const Sentimeter = require('./Sentimeter.js');

test('Sentimeter', function(t) {

  // like
  t.true(Sentimeter('I love this!'));
  t.true(Sentimeter('Awesome'));
  t.true(Sentimeter('this is awesome'));
  t.true(Sentimeter('Awesome sauce'));
  t.true(Sentimeter('Cool'));
  t.true(Sentimeter('Cool beans'));
  t.true(Sentimeter('I want this!'));
  t.true(Sentimeter('Yay!'));
  t.true(Sentimeter('Yay!!!!'));
  t.true(Sentimeter('heart this'));
  t.true(Sentimeter('heart'));
  t.true(Sentimeter('this is pretty cool'));
  t.true(Sentimeter('happy'));
  t.true(Sentimeter('haha'));
  t.true(Sentimeter('hahahahahaha'));
  t.true(Sentimeter('ha'));

  // dislike
  t.false(Sentimeter('I hate this'));
  t.false(Sentimeter('hate'));
  t.false(Sentimeter('don\' want to see this'));
  t.false(Sentimeter('this is pretty lame'));
  t.false(Sentimeter('don\'t like this'));
  t.false(Sentimeter('want it to stop'));
  t.false(Sentimeter('boooo'));
  t.false(Sentimeter('boo'));
  t.false(Sentimeter('lame'));
  t.false(Sentimeter('wacky'));
  t.false(Sentimeter('stupid'));

  // emojis like
  t.true(Sentimeter(':)'));
  t.true(Sentimeter('this makes me :)'));
  t.true(Sentimeter('this makes me 😀'));
  t.true(Sentimeter('😀'));
  t.true(Sentimeter('😻'));
  t.true(Sentimeter('👍'));
  t.true(Sentimeter('this is 👍'));
  t.true(Sentimeter('👌'));
  t.true(Sentimeter('❤️')); // heart

  // emojis dislike
  t.false(Sentimeter('😿'));
  t.false(Sentimeter('👎'));
  t.false(Sentimeter(':('));
  t.false(Sentimeter('😢'));
  t.false(Sentimeter('😭'));
  t.false(Sentimeter('💩'));

  t.end();
});
