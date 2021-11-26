// Exercise 5: Matching Character Ranges
// Task	Text	 
// Match	Ana	To be completed
// Match	Bob	To be completed
// Match	Cpc	To be completed
// Skip	aax	To be completed
// Skip	bby	To be completed
// Skip	ccz	To be completed

const strings = [
  "Ana",
  "Bob",
  "Cpc",
  "aax",
  "bby",
  "ccz",
];

for (const string of strings) {
  const match = string.match(/[A-Z]\w+/);
  console.log(`match`, match);
}