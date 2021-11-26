// extract the filename, method name and line number of line of the stack trace 
// (they follow the form "at package.class.methodname(filename:linenumber)").

// Good luck!

// Exercise 7: Extracting Data From Log Entries
// Task	Text	Capture Groups	 
// Skip	W/dalvikvm( 1553): threadid=1: uncaught exception
// Skip	E/( 1553): FATAL EXCEPTION: main
// Skip	E/( 1553): java.lang.StringIndexOutOfBoundsException
// Capture	E/( 1553):   at widget.List.makeView(ListView.java:1727)	makeView ListView.java 1727
// Capture	E/( 1553):   at widget.List.fillDown(ListView.java:652)	fillDown ListView.java 652
// Capture	E/( 1553):   at widget.List.fillFrom(ListView.java:709)	fillFrom ListView.java 709

const logs = [
  "W/dalvikvm( 1553): threadid=1: uncaught exception",
  "E/( 1553): FATAL EXCEPTION: main",
  "E/( 1553): java.lang.StringIndexOutOfBoundsException",
  "E/( 1553):   at widget.List.makeView(ListView.java:1727)	makeView ListView.java 1727",
  "E/( 1553):   at widget.List.fillDown(ListView.java:652)	fillDown ListView.java 652",
  "E/( 1553):   at widget.List.fillFrom(ListView.java:709)	fillFrom ListView.java 709",
];

for (const log of logs) {
  const match = log.match(/at [\w\.]+\.(\w+)\(([\w\.]+):(\d+)/);
  if (match) {
    console.log(`method`, match[1]);
    console.log(`file`, match[2]);
    console.log(`line`, match[3]);
  }
}