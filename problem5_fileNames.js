// In this simple example, extract the filenames and extension types of only 
// image files (not including temporary files for images currently being edited). 
// Image files are defined as .jpg,.png, and .gif.

// Exercise 5: Capturing Filename Data
// Task	Text	Capture Groups	 
// Skip	.bash_profile	
// Skip	workspace.doc	
// Capture	img0912.jpg	img0912 jpg
// Capture	updated_img0912.png	updated_img0912 png
// Skip	documentation.html
// Capture	favicon.gif	favicon gif
// Skip	img0912.jpg.tmp
// Skip	access.lock

const filenames = [
  ".bash_profile",
  "workspace.doc",
  "img0912.jpg",
  "updated_img0912.png",
  "documentation.html",
  "favicon.gif",
  "img0912.jpg.tmp",
  "access.lock",
];

for (const filename of filenames) {
  const match = filename.match(/^(\w+)(\.(jpg|png|gif))$/);
  console.log(`match`, match);
  if (match) {
    console.log(`name`, match[1]);
    console.log(`extension`, match[2]);
  }
}
