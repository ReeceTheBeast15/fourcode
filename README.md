Introduction

This is a new language/english encoding dictionary, and it's primary purpose is to help compress information into words with four or less characters.

There are a few issues, including representation of proper nouns and oral pronunciation of many words is difficult, but aside from this, it is relatively simple to understand. 

It is a quasi-numerical representation of every word in the english dictionary, starting at a and ending at z. For example, the first english word translated to fourcode would be a, second b, third c, and so on and so forth until you reach z. After this, the a will be "carried over" to a second place. So after z, you would have aa. Then ab. Then ac, ect.

Working out the math, it is not so unrealistic to represent any english word with only four characters. In fact, there is room for twice as many words with just four letters than there are in the englis language! If we take in to consideration the fact that english is a relatively large language, it might be conceivably possible to bog down to a three-letter constructed language for simplicity. Just for proof of concept, however, we are going to represent all of the english language, not showing regard for punctuation/proper nouns. 

As far as pronunciation goes, it is relatively simple: 
     If there are two consecutive constonants, either insert an "i" in between(soft fourcode) or leave it and pronounce only the constonants.
     If there are two consecutive nouns, pronounce them seperately and accordingly
     If there are two consecutive same letters, the rules regarding this go as follows:
          For one of the same letter(ie. b). Pronounce as usual
          For two of the same letter(ie. bb) pronounce with an "ae" inserted at the end(bae)
          For three of the same letters(ie. bbb) pronounce with an "a" inserted at the end(ba)
          For four consecutive same letters, pronounce with a u at the end(bue)
     For hard fourcode, it is not necessary to add letter repeat endings. Instead, just pronounce the letters individually.

Overall, soft fourcode is much easier to read and pronounce. However, this ease comes at a cost: vowels are vocally inserted where they don't need to be. A language efficiency is lost. Moreover, if one wishes to use conventional pronunciation rules and insert 'i' between constonants in written fourcode, it is not even four letters anymore. 

The advantage of hard fourcode is the fact that you don't need spaces; all of the words are four letters, and the words that are less have _ added. In this manner, it is not so hard to parse the written language in four-byte chunks. 

Installation and usage:

The command for install this npm package is simple. Simply do:
  npm i fourcode
  
In order to use the language, import the module:

  const fourcode = require('fourcode');

And subsequently access words as you would an english to fourcode dictionary:

  fourcode['hello']//vyag

There is also a translation page included in this repo. It is called show.html. You will need to node scrip.js to start the api, and then the page should ask the server for a dictionary. You will see the form button on show.html change to "translate" when the api is ready. Just insert english, and fourcode is out on the other side. 

This is an exceedingly simple project. I'm open to suggestions, and I know there are probably a lot of people out there on github who would know much better as to how I should approach this project.
  


