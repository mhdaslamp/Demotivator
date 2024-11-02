
const random = [
  "ഈശ്വരൻ നിനക്ക് കഴിവ് തന്നു… പക്ഷേ അതുപയോഗിക്കാനാകില്ലെന്ന് അവനറിഞ്ഞിരുന്നു.",
  "വായനയിലൂടെയും വിജയിച്ചവരുണ്ട്, പക്ഷേ തീര്‍ച്ചയായും നീ അല്ല.",
  "ചുറ്റും തിരിഞ്ഞു നോക്കൂ, എല്ലാം മുന്നേറുന്നു… നീ ഒഴിച്ച്.",
  "പരാജയം മഹത്തായ ഗുരു ആണ്. അതിനാൽ നിന്നെക്കണ്ട് കൊണ്ട് ധാരാളം പഠിക്കാം.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
];

const business = [
  "മൊത്തത്തിൽ നശിക്കാൻ ഒരു വഴി വേണമെന്ന് തോന്നിയാൽ ബിസിനസ് ഒരു നല്ല ഐഡിയയാണ്",
  "ബിസിനസ് ഒരിക്കൽ പൂജ്യം കാണിച്ചാൽ ചിരിക്കും, രണ്ടാമത്തെ പൂജ്യം വന്നാൽ കരയും",
  "തുടക്കം മുതൽ സങ്കടം കൊണ്ടോ? അപ്പോൾ ബിസിനസ് നിങ്ങള്ക്ക് പറ്റിയ തൊഴിൽ തന്നെ!",
  "പ്രവർത്തനം മുതൽ കഷ്ടപ്പാടാണ്, പിന്നെ നോക്കുക പിന്നെന്താണ്, ബിസിനസ് തോറ്റേ തീരൂ",
];

const study = [
  "പുസ്തകങ്ങളെ പെട്ടെന്നു എടുക്കരുത്... അടുത്ത ഉത്സവം വരെ കാത്തിരിക്കാം.",
  "നാളെ മുതൽ പഠിക്കാം എന്ന് പറഞ്ഞു തുടങ്ങി ഇപ്പൊഴൊക്കെ വർഷങ്ങൾ ആയി",
  "കുറച്ചുനേരം വിശ്രമം എടുക്കട്ടെ എന്ന് പറഞ്ഞു തുടങ്ങിയത്, ഓര്‍മ്മയില്ലാത്ത വിശ്രമമായി",
];

const life = [
  "ഈ ജീവിതം ഒരുപാട് പഠിപ്പിക്കുന്നു, പക്ഷേ പഠിക്കാനുള്ള ആത്മാർഥത ഉണ്ടാക്കുന്നില്ല",
  "ഞാൻ പറഞ്ഞിട്ട് കാര്യമില്ല, ജീവിതത്തിന് എന്റെ പ്ലാനുകൾക്ക് കാര്യം ഇല്ല.",
  "ജീവിതത്തിൽ മാറ്റമില്ലെങ്കിൽ സന്തോഷിക്കാം, കാരണം തിരിഞ്ഞു നോക്കാൻ ചിലരുടെ ജീവിതം അതിലും മോശം ആണ്",
  "ജീവിതം ഒരു പരീക്ഷയാണെന്ന് പറയുന്നതൊക്കെ ശരി, പക്ഷേ സിലബസ് എവിടെയാണ്",
];

const relation = [
  "പ്രണയം പ്രഥമ സന്ദർശനത്തിൽ മനസ്സിലായില്ലെങ്കിൽ, അടുത്ത രണ്ടു–മൂന്നു സന്ദർശനങ്ങൾക്കകം മനസ്സിലാകും, അവിടം നമ്മുടേതല്ലെന്ന്",
  "പ്രണയത്തിൽ മാത്രം അല്ല, പത്തോ പതിനൊന്നോ പ്രണയങ്ങളിൽ പരാജയപ്പെട്ടാലും പരിചയസമ്പത്താകു",
  "പ്രണയത്തെ വിശ്വസിച്ച് പലതും ചെയ്തവരെല്ലാം നാളിതുവരെ അതിന്റെ ചിലവ് മാത്രമാണ് അടക്കുന്നത്",
  "ജീവിതം ഒരു പരീക്ഷയാണെന്ന് പറയുന്നതൊക്കെ ശരി, പക്ഷേ സിലബസ് എവിടെയാണ്",
  "അവിടെ എവിടെയോ ആത്മാർത്ഥമായി തകർന്ന ചില ഓർമ്മകൾ; അതുപോലെ ചിലരും തകർന്നിരിക്കട്ടെ",
];


let selectedCategory = 'Random'; 


const audioSources = {
  Study: "study_audio.mp3",      
  Business: "business_audio.mp3",
  Life: "nagachechi_new.mp3",        
  Relationship: "relation_audio.mp3", 
  Random: "nagachechi_new.mp3",    
};


function changeCategory(category) {
  selectedCategory = category; 
  const mainButton = document.getElementById("mainButton");
  mainButton.innerHTML = `${category} <i class="arrow"></i>`;
}


function getMotivation() {
  const quoteElement = document.getElementById("quote");
  const audio = document.getElementById("motivational-music");
  
  let quotes;
  let audioSrc;


  switch (selectedCategory) {
    case 'Study':
      quotes = study;
      audioSrc = audioSources.Study;
      break;
    case 'Business':
      quotes = business;
      audioSrc = audioSources.Business;
      break;
    case 'Life':
      quotes = life;
      audioSrc = audioSources.Life;
      break;
    case 'Relationship':
      quotes = relation;
      audioSrc = audioSources.Relationship;
      break;
    case 'Random':
    default:
      quotes = random;
      audioSrc = audioSources.Random;
      break;
  }


  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
 
  audio.src = audioSrc; 
  audio.currentTime = 0; 
  audio.play(); 
}


function stopAudio() {
  audio.pause();
  audio.currentTime = 0; // Reset audio to the start
}

function moveButton() {
  const button = document.getElementById("stopAudioButton");
  
  // Define the maximum width and height for the movement area
  const maxWidth = 750;
  const maxHeight = 750;
  
  // Ensure the button stays within the max width and height
  const randomX = Math.floor(Math.random() * (Math.min(maxWidth, window.innerWidth) - button.offsetWidth));
  const randomY = Math.floor(Math.random() * (Math.min(maxHeight, window.innerHeight) - button.offsetHeight));
  
  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
