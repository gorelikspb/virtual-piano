const COLLECTION = document.querySelectorAll(".piano-key", ".sharp");
const PIANO = document.getElementById('piano')

// COLLECTION.forEach((elem) => {
//   elem.addEventListener('mousedown', (event)=> {
//     event.target.classList.add('active');
//   })
//   elem.addEventListener('mouseup', (event)=> {
//     event.target.classList.remove('active');
//   })
// })

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


// PIANO.addEventListener("mousedown", startCorrespondOver, false);
// PIANO.addEventListener("mouseup", stopCorrespondOver)

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


PIANO.addEventListener('mousedown', startCorrespondOver, false //startSound//(event)=> {
//   event.target.classList.add('piano-key-active');
//   let note = event.target.getAttribute('data-note');
//   playAudio('assets/audio/' + note + '.mp3');
  

// }

)

window.addEventListener('mouseup', stopCorrespondOver//(event)=> {
//   event.target.classList.remove('piano-key-active');

// }
)



const BTN_NOTES = document.querySelector('.btn-notes');
const BTN_LETTERS = document.querySelector('.btn-letters');

BTN_LETTERS.addEventListener('mousedown', (event)=>{
  event.target.classList.add('btn-active');
  BTN_NOTES.classList.remove('btn-active');

  COLLECTION.forEach((elem) => {
    elem.classList.add('letter');
  })

  // for (let elem of pianoKeys){
  //   elem.classList.add("название класса")} так сразу будет добавляться класс ко всем piano-key

})

BTN_NOTES.addEventListener('mousedown', (event)=>{
  event.target.classList.add('btn-active');
  BTN_LETTERS.classList.remove('btn-active');

  COLLECTION.forEach((elem) => {
    elem.classList.remove('letter');
  })

})





window.addEventListener('keyup', (event)=> {
  // event.target.classList.remove('active');

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
  console.log(active_key);
  
  COLLECTION.forEach((elem) => {
    elem.classList.remove('piano-key-active');
  })

  active_key.classList.add('piano-key-active');
  playAudio('assets/audio/' + note + '.mp3');
  
});
 

// const PIANO = document.getElementById("piano");

// const startSound = (event) => {
//   event.target.classList.add("active");
// }

// const stopSound = (event) => {
//   event.target.classList.remove("active");
// }

// const startCorrespondOver = (event) => {
//   if (event.target.classList.contains("piano-button")) {
//     event.target.classList.add("active");
//   }

//   COLLECTION.forEach((elem) => {
//     elem.addEventListener("mouseover", startSound)
//     elem.addEventListener("mouseout", stopSound)
//   });
// }

// const stopCorrespondOver = () => {
//   COLLECTION.forEach((elem) => {
//     elem.classList.remove("active");
//     elem.removeEventListener("mouseover", startSound)
//     elem.removeEventListener("mouseout", stopSound)
//   });
// }

// PIANO.addEventListener("mousedown", startCorrespondOver, false);
// PIANO.addEventListener("mouseup", stopCorrespondOver)

// // при клике по клавише пианино мышкой проигрывается соответствующая этой клавише нота, клавиша переходит в активное состояние
