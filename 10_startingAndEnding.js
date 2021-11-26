// Exercise 10: Matching Lines
// Task	Text	 
// Match	Mission: successful
// Skip	Last Mission: unsuccessful
// Skip	Next Mission: successful upon capture of target

const texts = [
  "Mission: successful",
  "Last Mission: unsuccessful",
  "Next Mission: successful upon capture of target",
];

for (const text of texts) {
  const match = text.match(/^Mission/);
  console.log(`match`, match);
}