// Exercise 1½: Matching Digits
// Task	Text	 
// Match	abc123xyz
// Match	define "123"
// Match	var g = 123;

const strings = [
  "abc123xyz",
  "123",
  "var g = 123;",
];

for (const string of strings) {
  const matchResult = string.match(/\d+/);
  console.log(`matchResult`, matchResult);
  console.log(`matchResult.index`, matchResult.index);
}