// a simple regular expression to capture the content of each line, without the extra whitespace.

// Exercise 6: Matching Lines
// Task	Text	Capture Groups	 
// Capture				The quick brown fox...	The quick brown fox...
// Capture	   jumps over the lazy dog.	jumps over the lazy dog.

const texts = [
  "			The quick brown fox...	",
  "	   jumps over the lazy dog.	",
]

for (const text of texts) {
  const match = text.match(/\w+(\s\w+)*\.*/);
  console.log(`trimmed:`, match[0]);
}