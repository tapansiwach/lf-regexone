// Exercise 3: Matching Emails
// Task	Text	Capture Groups	 
// Capture	tom@hogwarts.com	tom
// Capture	tom.riddle@hogwarts.com	tom.riddle
// Capture	tom.riddle+regexone@hogwarts.com	tom.riddle
// Capture	tom@hogwarts.eu.com	tom
// Capture	potter@hogwarts.com	potter
// Capture	harry@hogwarts.com	harry
// Capture	hermione+regexone@hogwarts.com	hermione

const emails = [
  "tom@hogwarts.com",
  "tom.riddle@hogwarts.com",
  "tom.riddle+regexone@hogwarts.com",
  "tom@hogwarts.eu.com",
  "potter@hogwarts.com",
  "harry@hogwarts.com",
  "hermione+regexone@hogwarts.com",
];

for (const email of emails) {
  const match = email.match(/([\w\.]+)(\+\w+)?@(\w+(\.\w+)?\.com)/);
  console.log(`match`, match);
  console.log(`name`, match[1]);
  console.log(`filter`, match[2]);
  console.log(`domain`, match[3]);
}

