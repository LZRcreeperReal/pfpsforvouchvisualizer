const phrases = [
  "yeah ur good","its fine","all good here","that worked","yea i got it",
  "i got it","looks good","no issues","seems fine","all set","thx again",
  "appreciate it","nice","clean","perfect honestly",
  "mb just saw this now but yeah","didnt have issues","yeah works",
  "it came through","i see it now","yep got it","all good on my end",
  "that’s fine","looks okay to me","yea thats good","all sorted",
  "we good","its done","no problems"
];

const addOns = [""," lol"," fr"," ngl"," thanks"," appreciate it"," ok"];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

const responses = [];

while(responses.length < 100){
  let msg = pick(phrases) + pick(addOns);

  if(Math.random() < 0.15) msg = msg.replace("good","gud");
  if(Math.random() < 0.1) msg = msg.replace("you","u");
  if(Math.random() < 0.1) msg += "...";

  responses.push(msg);
}

// 🔥 CRITICAL LINE
window.responses = responses;
