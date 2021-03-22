const COLLECTION = document.querySelectorAll(".piano-key", ".sharp");
const PIANO = document.getElementById('piano')

function playAudio(url) { 
  new Audio(url).play();
}

const startSound = (event) => {
  event.target.classList.add("piano-key-active");
  let note = event.target.getAttribute('data-note');
  playAudio('assets/audio/' + note + '.mp3');
}



const stopSound = (event) => {
  event.target.classList.remove("piano-key-active");
}

const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.add("piano-key-active");
    startSound(event);
  }

  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", startSound)
    elem.addEventListener("mouseout", stopSound)
  });
}

const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove("piano-key-active");

    elem.removeEventListener("mouseover", startSound)
    elem.removeEventListener("mouseout", stopSound)
  });
}


PIANO.addEventListener('mousedown', startCorrespondOver, false)

window.addEventListener('mouseup', stopCorrespondOver)

const BTN_NOTES = document.querySelector('.btn-notes');
const BTN_LETTERS = document.querySelector('.btn-letters');

BTN_LETTERS.addEventListener('mousedown', (event)=>{
  event.target.classList.add('btn-active');
  BTN_NOTES.classList.remove('btn-active');

  COLLECTION.forEach((elem) => {
    elem.classList.add('letter');
  })
})

BTN_NOTES.addEventListener('mousedown', (event)=>{
  event.target.classList.add('btn-active');
  BTN_LETTERS.classList.remove('btn-active');

  COLLECTION.forEach((elem) => {
    elem.classList.remove('letter');
  })

})





window.addEventListener('keyup', (event)=> {

  COLLECTION.forEach((elem) => {
    elem.classList.remove('piano-key-active');
  })

})


const KEYS = {
  KeyD:'c',
  KeyF:'d',
  KeyG:'e',
  KeyH:'f',
  KeyJ:'g',
  KeyK:'a',
  KeyL:'b',
  //sharps
  KeyR: 'c♯',
  KeyT: 'd♯',
  KeyU: 'f♯',
  KeyI: 'g♯',
  KeyO: 'a♯',

};

window.addEventListener('keydown', (event) => {
  code = (event.code);
  let note = KEYS[code];
  let active_key = document.querySelector('[data-note='+note +']');
  
  COLLECTION.forEach((elem) => {
    elem.classList.remove('piano-key-active');
  })

  active_key.classList.add('piano-key-active');
  if (!event.repeat) {
  playAudio('assets/audio/' + note + '.mp3');
  }
  
});
 

const BTN_FULLSCREEN = document.querySelector(".fullscreen");


BTN_FULLSCREEN.addEventListener('click', (event)=>{
  // event.target.classList.add('btn-active');
  // BTN_LETTERS.classList.remove('btn-active');
  toggleFullScreen();

})

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
