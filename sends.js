const base = [
  "did u get it",
  "you get it",
  "everything good",
  "we good",
  "you got it right",
  "it came through yeah",
  "all good",
  "u received it",
  "it work for u",
  "you got it?"
];

const endings = ["","?"," lol"," fr",""];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

const sends = [];

while(sends.length < 100){
  let msg = pick(base) + pick(endings);

  if(Math.random() < 0.2) msg = msg.replace("you","u");
  if(Math.random() < 0.1) msg = msg.toLowerCase();

  sends.push(msg);
}

// 🔥 CRITICAL LINE
window.sends = sends;
