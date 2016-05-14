# Sentimeter

Attempt to judge simple like / dislike sentiment from sentence, phrase, or emoji.

```
const Sentimeter = require('sentimeter');
Sentimeter('I love this') // true
Sentimeter('I hate this') // false
Sentimeter('this is pretty cool') // true
Sentimeter('lame') // false
Sentimeter('👍') // true
Sentimeter('💩') // false
// see test for more examples
```

## Test

```
node Sentimeter.spec.js
```
