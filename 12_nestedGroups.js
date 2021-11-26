// Exercise 12: Matching Nested Groups
// Task	Text	Capture Groups	 
// Capture	Jan 1987	Jan 1987 1987
// Capture	May 1969	May 1969 1969
// Capture	Aug 2011	Aug 2011 2011

const dates = [
  "Jan 1987",
  "May 1969",
  "Aug 2011",
];

for (const date of dates) {
  const match = date.match(/(\w{3} (\d{4}))/);
  console.log(`match`, match);
  console.log(`match[1]`, match[1]);
  console.log(`match[2]`, match[2]);
  console.log(`typeof match[2]`, typeof match[2]);
}