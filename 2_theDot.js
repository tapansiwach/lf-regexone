// Exercise 2: Matching With Wildcards
// Task	Text	 
// Match	cat.	To be completed
// Match	896.	To be completed
// Match	?=+.	To be completed
// Skip	abc1

const strings = [
  "cat.",
  "896.",
  "?=+.",
  "abc1",
];

for (const string of strings) {
  const match = string.match(/.*\./);
  console.log(`match`, match);
}