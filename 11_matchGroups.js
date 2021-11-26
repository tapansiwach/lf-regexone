// Exercise 11: Matching Groups
// Task	Text	Capture Groups	 
// Capture	file_record_transcript.pdf	file_record_transcript
// Capture	file_07241999.pdf	file_07241999
// Skip	testfile_fake.pdf.tmp

const texts = [
  "file_record_transcript.pdf",
  "file_07241999.pdf",
  "testfile_fake.pdf.tmp",
];

for (const text of texts) {
  const match = text.match(/([a-z0-9_]+).pdf$/);
  console.log(`match`, match);
  console.log(`match[1]`, match && match[1]);
}