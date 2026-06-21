
const base = [
  "nova","luna","ghost","vyn","kai","milo","echo","ray","zen","ace",
  "bliss","orbit","neon","void","pixel","cloud","ember","frost","rune",
  "sky","mist","flare","sage","drift","halo","lumen","astra","zero",
  "kairo","nyx","reign","storm","glitch","atlas","flarex","sol","moon"
];

const suffixes = [
  "", "", "", "x", "z", "v2", "real", "_alt", "_tv", "_gg",
  ".x", ".real", "_live", "_official", "_lol", "777", "999"
];

const extras = [
  "", "", "", "_", "."
];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

const usernames = new Set();

/* generate 150 unique usernames */
while(usernames.size < 150){

  let name = pick(base);

  // optional modifier
  if(Math.random() < 0.7){
    name += pick(suffixes);
  }

  // occasional extra variation
  if(Math.random() < 0.3){
    name = name + pick(extras) + pick(base);
  }

  // number injection (VERY important for realism)
  if(Math.random() < 0.5){
    name += Math.floor(Math.random()*99);
  }

  usernames.add(name);
}

window.usernames = [...usernames];
