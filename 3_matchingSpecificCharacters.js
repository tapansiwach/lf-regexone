// Exercise 3: Matching Characters
// Task	Text	 
// Match	can
// Match	man
// Match	fan
// Skip	dan
// Skip	ran
// Skip	pan

const strings = [
  "can",
  "man",
  "fan",
  "dan",
  "ran",
  "pan",
];

for (const string of strings) {
  const match = string.match(/[cmf]an/);
  console.log(`match`, match);
}