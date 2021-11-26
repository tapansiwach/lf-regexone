// Exercise 13: Matching Nested Groups
// Task	Text	Capture Groups	 
// Capture	1280x720	1280 720	To be completed
// Capture	1920x1600	1920 1600	To be completed
// Capture	1024x768	1024 768	To be completed

const resolutions = [
  "1280x720",
  "1920x1600",
  "1024x768",
];

for (const resolution of resolutions) {
  const match = resolution.match(/(\d{3,})x(\d{3,})/);
  console.log(`match`, match);
  console.log(`match[1]`, match[1]);
  console.log(`match[2]`, match[2]);
}