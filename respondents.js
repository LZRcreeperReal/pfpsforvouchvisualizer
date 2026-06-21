
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

const extras = [
  "",
  "",
  "",
  " fr",
  " ngl",
  " lol",
  " tbh",
  " honestly",
  " no cap",
  "..."
];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function format(msg, user){
  return msg.replaceAll("{user}", user);
}

const responses = new Set();

/* generate 150 responses */
while(responses.size < 150){

  let msg;

  const type = Math.random();

  // STYLE 1: direct vouch
  if(type < 0.5){
    msg = format(pick(templates), user);
  }

  // STYLE 2: short blunt Discord style
  else if(type < 0.8){
    msg = `${pick(positives)} ${user}`;
  }

  // STYLE 3: human messy sentence
  else{
    msg = `${pick(positives)} for ${user} ${pick(extras)}`;
  }

  // realism noise
  if(Math.random() < 0.2) msg = msg.replace("you","u");
  if(Math.random() < 0.1) msg = msg.replace("is","s");
  if(Math.random() < 0.1) msg += "..."

  responses.add(msg.trim());
}

window.responses = [...responses];
