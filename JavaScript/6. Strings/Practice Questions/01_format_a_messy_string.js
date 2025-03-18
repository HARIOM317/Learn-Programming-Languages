// task - remove all white spaces, replace all "bad" with "good" and convert it into lowercase

let input = "  This is a BAD example of a bad string.  ";

let output = input.trim().toLowerCase().replaceAll("bad", "good");

console.log(output);
