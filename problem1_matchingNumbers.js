// Exercise 1: Matching Numbers
// Task	Text	 
// Match	3.14529
// Match	-255.34
// Match	128
// Match	1.9e10
// Match	123,340.00
// Skip	720p

const numbers = [
  "3.14529",
  "-255.34",
  "128",
  "1.9e10",
  "123,340.00",
  "720p",
];

for (const number of numbers) {
  const match = number.match(/[-+]?\d+(,\d+)*(\.\d+(e\d+)?)?$/);
  console.log(`match`, match);
}