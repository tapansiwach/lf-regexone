// Exercise 8: Matching Optional Characters
// Task	Text	 
// Match	1 file found?	
// Match	2 files found?
// Match	24 files found?
// Skip	No files found.

const strings = [
  "1 file found?",
  "2 files found?",
  "24 files found?",
  "No files found.",
];

for (const string of strings) {
  const match = string.match(/\d+ files? found/);
  console.log(`match`, match);
}