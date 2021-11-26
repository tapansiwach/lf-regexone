// Exercise 4: Excluding Characters
// Task	Text	 
// Match	hog	To be completed
// Match	dog	To be completed
// Skip	bog	To be completed

const strings = [
  "hog",
  "dog",
  "bog",
];

for (const string of strings) {
  const match = string.match(/[^b]og/);
  console.log(`match`, match);
}