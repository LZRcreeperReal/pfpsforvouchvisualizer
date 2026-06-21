function pick(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

/* -------------------------
   VOUCH TEMPLATES
------------------------- */

const templates = [
  "vouch for {user}",
  "vouch {user}",
  "{user} is legit",
  "did a deal with {user}, vouch",
  "traded with {user}, all good",
  "{user} fast and trusted",
  "easy deal with {user}",
  "can vouch for {user}",
  "{user} legit af",
  "{user} is safe",
  "smooth deal with {user}",
  "100% vouch {user}",
  "vouch on {user}",
  "deal with {user} went smooth"
];

const positives = [
  "vouch",
  "vouch legit",
  "100% legit",
  "smooth deal",
  "fast and easy",
  "all good",
  "no issues",
  "perfect trade",
  "went smooth",
  "trustworthy",
  "safe deal"
];

/* -------------------------
   MAIN GENERATOR
------------------------- */

function buildResponses(users){

  const arr = [];

  for(let i = 0; i < 150; i++){

    const hasUsers =
      Array.isArray(users) &&
      users.length > 0;

    const user = hasUsers
      ? pick(users)
      : "user";

    const type = Math.random();

    let msg;

    if(type < 0.45){
      msg = pick(templates).replaceAll("{user}", user);
    }
    else if(type < 0.8){
      msg = `${pick(positives)} ${user}`;
    }
    else{
      msg = `${user} - ${pick(positives)}`;
    }

    // small realism noise
    if(Math.random() < 0.15) msg += " fr";
    if(Math.random() < 0.10) msg += "...";

    arr.push(msg);
  }

  return arr;
}

/* expose globally */
window.buildResponses = buildResponses;
