// Exercise 15: Matching Other Special Characters
// Task	Text	 
// Match	The quick brown fox jumps over the lazy dog.
// Match	There were 614 instances of students getting 90.0% or above.
// Match	The FCC had to censor the network for saying &$#*@!.

const texts = [
  "The quick brown fox jumps over the lazy dog.",
  "There were 614 instances of students getting 90.0% or above.",
  "The FCC had to censor the network for saying &$#*@!.",
];

for (const text of texts) {
  const match = text.match(/[\w\s\d\.%&$#*@!]+/); // \w\W is same as .
  console.log(`match`, match);
}