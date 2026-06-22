function pick(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

/* -------------------------
   BASE MESSAGE TYPES
------------------------- */

const greetings = [
  "yo",
  "yo bro",
  "hey",
  "sup",
  "yo quick thing",
  "hey rq",
  "yo real quick",
  "yo u there",
  "hey man",
  "yo sorry to bother"
];

const intents = [
  "can u vouch for me",
  "can u leave a vouch",
  "mind vouching",
  "can u confirm it went fine",
  "can u say it worked",
  "can u say it's legit",
  "can u drop a vouch",
  "can u vouch pls",
  "can u leave feedback",
  "can u confirm trade"
];

const softeners = [
  "if u can",
  "when u got time",
  "no rush",
  "real quick",
  "pls",
  "appreciate it",
  "thanks",
  "if possible",
  ""
];

const contextLines = [
  "it was smooth",
  "everything went fine",
  "fast deal btw",
  "no issues at all",
  "all good on my end",
  "ur legit",
  "pretty quick trade",
  "no problems"
];

/* -------------------------
   GENERATOR
------------------------- */

const sends = new Set();

while(sends.size < 120){

  const type = Math.random();
  let msg = "";

  /* STYLE 1: simple direct ask */
  if(type < 0.55){
    msg =
      pick(greetings) + " " +
      pick(intents) + " " +
      pick(softeners);
  }

  /* STYLE 2: slightly more human / context added */
  else if(type < 0.8){
    msg =
      pick(greetings) + " " +
      pick(intents) +
      " - " +
      pick(contextLines);
  }

  /* STYLE 3: casual messy but still natural */
  else{
    msg =
      pick(greetings) + " " +
      pick(intents) + " btw " +
      pick(softeners);
  }

  /* light realism tweaks (NOT overdone) */
  if(Math.random() < 0.15) msg += "...";
  if(Math.random() < 0.10) msg = msg.replace("you", "u");
  if(Math.random() < 0.08) msg = msg.replace("your", "ur");

  sends.add(msg.trim());
}

window.sends = [...sends];
