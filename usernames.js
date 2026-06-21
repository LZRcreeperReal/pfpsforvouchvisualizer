const fs = require("fs");

const roots = [
"saturn","clouded","faded","nova","vyn","mei","mika","aeri",
"angelic","rynn","voided","sleepy","starlit","velvet","lotus",
"orbit","lunar","ghost","frosted","hollow","solace","drift",
"glow","static","astral","karma","echo","haze","bliss","serene"
];

const memes = [
"catlawyer","breaddealer","taxevasion","microwave","goober",
"pickle","shrimp","toaster","bonk","beep","womp","nugget"
];

const prefixes = [
"its","real","just","only","that","hey","not","im","the"
];

const suffixes = [
"_","__","zz","qt","lol","alt","tv","x"
];

const fileExts = [
".png",".jpg",".gif",".mp4",".mov",".exe"
];

const endings = [
"7","11","22","77","99","404","999"
];

const usernames = new Set();

function pick(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

function maybe(chance) {
return Math.random() < chance;
}

function repeatLast(str) {
const last = str[str.length - 1];
return str + last.repeat(Math.floor(Math.random() * 3) + 1);
}

function generate() {
const root = maybe(0.15) ? pick(memes) : pick(roots);

const patterns = [

```
() => root,

() => pick(prefixes) + root,

() => root + pick(suffixes),

() => root + pick(endings),

() => root + pick(fileExts),

() => repeatLast(root),

() => root + root.slice(0, 2),

() => root + "." + pick(["lol","wtf","fr","ok"]),

() => pick(roots) + pick(roots),

() => pick(roots) + pick([
  "heart",
  "core",
  "dream",
  "night",
  "wave",
  "fall",
  "star",
  "sky"
]),

() => pick([
  "4am",
  "3am",
  "midnight",
  "offline",
  "afk",
  "idk"
]) + root,

() => root + "_" + pick([
  "archive",
  "alt",
  "main",
  "private"
])
```

];

return pick(patterns)()
.toLowerCase()
.replace(/[^a-z0-9._]/g, "");
}

while (usernames.size < 250000) {
const username = generate();

if (
username.length >= 3 &&
username.length <= 18
) {
usernames.add(username);
}
}

fs.writeFileSync(
"generated-usernames.json",
JSON.stringify([...usernames])
);

console.log(
`Generated ${usernames.size} usernames`
);
