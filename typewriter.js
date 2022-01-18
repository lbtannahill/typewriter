const sentence = "hello there from lighthouse labs";

let timeOutTime = 0

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, timeOutTime += 50)
};

console.log('')