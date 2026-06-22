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

function buildResponses(users, targetUser = null){

  const arr = [];

  const hasUsers = Array.isArray(users) && users.length > 0;

  // fallback if no target provided
  const finalTarget = targetUser || "user";

  for(let i = 0; i < 150; i++){

    const type = Math.random();

    let msg;

    // 1) Template style (most common)
    if(type < 0.5){
      msg = pick(templates).replaceAll("{user}", finalTarget);
    }

    // 2) Positive + name
    else if(type < 0.8){
      msg = `${pick(positives)} ${finalTarget}`;
    }

    // 3) Slight variation style
    else{
      msg = `${finalTarget} - ${pick(positives)}`;
    }

    // realism noise
    if(Math.random() < 0.15) msg += " fr";
    if(Math.random() < 0.10) msg += "...";

    arr.push(msg);
  }

  return arr;
}

/* expose globally */
window.buildResponses = buildResponses;
