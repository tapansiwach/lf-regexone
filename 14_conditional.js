// Exercise 14: Matching Conditional Text
// Task	Text	 
// Match	I love cats
// Match	I love dogs
// Skip	I love logs
// Skip	I love cogs

const texts = [
  "I love cats",
  "I love dogs",
  "I love logs",
  "I love cogs",
];

for (const text of texts) {
  const match = text.match(/I love ([cb]ats|[dh]ogs)/);
  console.log(`match`, match);
  console.log(`match[1]`, match && match[1]);
}