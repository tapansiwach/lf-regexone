// Exercise 2: Matching Phone Numbers
// Task	Text	Capture Groups	 
// Capture	415-555-1234	415
// Capture	650-555-2345	650
// Capture	(416)555-3456	416
// Capture	202 555 4567	202
// Capture	4035555678	403
// Capture	1 416 555 9292	416

const phoneNumbers = [
  "415-555-1234",
  "650-555-2345",
  "(416)555-3456",
  "202 555 4567",
  "4035555678",
  "1 416 555 9292",
];

for (const phoneNumber of phoneNumbers) {
  const match = phoneNumber.match(/1?[\s-]?\(?(\d{3})[)\s-]?(\d{3})[\s-]?(\d{4})/);
  console.log(`match`, match);
  console.log(`match[1]`, match[1]);
}