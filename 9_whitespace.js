// Exercise 9: Matching Whitespaces
// Task	Text	 
// Match	1.   abc
// Match	2.	abc
// Match	3.           abc
// Skip	4.abc	To be completed

const strings = [
  "1.   abc",
  "2.	abc",
  "3.           abc",
  "4.abc",
];

for (const string of strings) {
  const match = string.match(/.*\s+.*/);
  console.log(`match`, match);
}