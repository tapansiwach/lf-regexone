// Exercise 6: Matching Repeated Characters
// Task	Text	 
// Match	wazzzzzup	To be completed
// Match	wazzzup	To be completed
// Skip	wazup

const strings = [
  "wazzzzzup",
  "wazzzup",
  "wazup",
];

for (const string of strings) {
  const match = string.match(/waz{2,}up/);
  console.log(`match`, match);
}