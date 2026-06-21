
const starters = [
  "yo",
  "hey",
  "hi",
  "sup",
  "yo bro",
  "hey man",
  "yo quick thing",
  "yo real quick",
  "hey rq",
  "yo sorry to bother",
  "yo u there"
];

const requests = [
  "can u vouch",
  "can u leave a vouch",
  "mind vouching",
  "can u confirm",
  "can u vouch for me",
  "can u drop a vouch",
  "can u say it worked",
  "can u say it’s legit",
  "can u confirm trade went fine",
  "can u vouch pls",
  "can u leave feedback"
];

const contextAdds = [
  "",
  "",
  "",
  " if u got a sec",
  " when u can",
  " pls",
  " real quick",
  " no rush",
  " thanks",
  " appreciate it",
  " if possible"
];

const followUps = [
  "",
  "",
  "",
  " it was smooth",
  " everything went fine",
  " fast deal btw",
  " no issues at all",
  " appreciate u",
  " ur legit",
  " all good on my end"
];

const fillers = [
  "",
  "",
  "",
  "...",
  " lol",
  " fr",
  " ngl",
  " btw"
];

function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

const sends = new Set();

while(sends.size < 100){

  let msg = "";

  const type = Math.random();

  // STYLE 1: direct request
  if(type < 0.55){
    msg =
      pick(starters) + " " +
      pick(requests) +
      pick(contextAdds) +
      pick(fillers);
  }

  // STYLE 2: slightly emotional / reassurance
  else if(type < 0.8){
    msg =
      pick(starters) + " " +
      pick(requests) +
      ", it was " +
      pick(followUps) +
      pick(fillers);
  }

  // STYLE 3: messy human double message vibe
  else{
    msg =
      pick(starters) + " " +
      pick(requests) +
      " " +
      pick(contextAdds) +
      " — " +
      pick(requests) +
      pick(fillers);
  }

  // human inconsistency (important for realism)
  if(Math.random() < 0.2) msg = msg.replace("you","u");
  if(Math.random() < 0.1) msg = msg.replace("are","r");
  if(Math.random() < 0.15) msg += "...";

  sends.add(msg.trim());
}

window.sends = [...sends];
