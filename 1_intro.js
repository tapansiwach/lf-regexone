// Exercise 1: Matching Characters
// Task	Text	 
// Match	abcdefg	To be completed
// Match	abcde	To be completed
// Match	abc

const strings = [
  "abcdefg",
  "abcde",
  "abc",
];

for (const string of strings) {
  const result = string.match(/abc/);
  console.log(result);
}