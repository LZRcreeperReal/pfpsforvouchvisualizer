function pick(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

const templates = [
  "vouch for {user}",
  "vouch {user}",
  "{user} is legit",
  "did a deal with {user} vouch",
  "traded with {user} all good",
  "{user} fast and trusted",
  "easy deal with {user}",
  "can vouch for {user}",
  "{user} legit af",
  "{user} is safe",
  "smooth deal with {user}",
  "vouch 100% {user}"
];

const positives = [
  "vouch",
  "vouch legit",
  "100% legit",
  "smooth deal",
  "fast and easy",
  "all good",
  "no issues",
  "perfect trade"
];

function buildResponses(users){
  const arr = [];

  for(let i = 0; i < 150; i++){
    const user = Array.isArray(users) && users.length
    ? pick(users)
    : "user";

    const msg = Math.random() < 0.6
      ? pick(templates).replaceAll("{user}", user)
      : `${pick(positives)} ${user}`;

    arr.push(msg);
  }

  return arr;
}

window.buildResponses = buildResponses;
