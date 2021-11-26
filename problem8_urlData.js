// URIs, or Uniform Resource Identifiers, are a representation of a resource
// that is generally composed of a scheme, host, port (optional), and resource path, respectively 
// highlighted below.

// http://regexone.com:80/page

// Exercise 8: Extracting Data From URLs
// Task	Text	Capture Groups	 
// Capture	ftp://file_server.com:21/top_secret/life_changing_plans.pdf	ftp file_server.com 21
// Capture	https://regexone.com/lesson/introduction#section	https regexone.com
// Capture	file://localhost:4040/zip_file	file localhost 4040
// Capture	https://s3cur3-server.com:9999/	https s3cur3-server.com 9999
// Capture	market://search/angry%20birds	market search

const uris = [
  "ftp://file_server.com:21/top_secret/life_changing_plans.pdf",
  "file://localhost:4040/zip_file",
  "https://s3cur3-server.com:9999/",
  "market://search/angry%20birds",
];

for (const uri of uris) {
  const match = uri.match(/(\w+):\/\/([\w\d-_\.]+):?(\d+)?\//);
  if (match) {
    console.log("------")
    console.log(`scheme`, match[1]);
    console.log(`domain`, match[2]);
    console.log(`port`, match[3]);
  }
}
