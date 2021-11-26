// Exercise 7: Matching Repeated Characters
// Task	Text	 
// Match	aaaabcc	To be completed
// Match	aabbbbc	To be completed
// Match	aacc	To be completed
// Skip	a

const strings = [
  "aaaabcc",
  "aabbbbc",
  "aacc",
  "a",
];

for (const string of strings) {
  const match = string.match(/a[abc]+/);
  console.log(`match`, match);
}