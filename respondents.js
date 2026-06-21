const positives = [
  "vouch",
  "vouch legit",
  "vouch 100%",
  "100% legit",
  "smooth deal",
  "fast and easy",
  "all good",
  "no issues",
  "perfect trade",
  "went smooth",
  "trustworthy",
  "quick and clean",
  "solid",
  "safe deal",
  "would vouch again"
];

const templates = [
  "vouch for {user}",
  "vouch {user}",
  "vouch for {user} legit",
  "{user} is legit",
  "did a deal with {user} vouch",
  "traded with {user} all good",
  "vouching {user} was smooth",
  "{user} fast and trusted",
  "vouch for {user} 100%",
  "{user} went first all good",
  "easy deal with {user}",
  "can vouch for {user}",
  "vouch {user} no problems",
  "{user} legit af",
  "{user} is safe"
];

const extras = ["", "", "", " fr", " ngl", " lol", " tbh", " honestly", " no cap", "..."];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function format(msg, user){
  return msg.replaceAll("{user}", user);
}

window.responses = { templates, positives, extras };
