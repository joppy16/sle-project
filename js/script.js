function textAppear(){
  const text = document.querySelector('#para1');

  let textPosition = text.getBoundingClientRect().top;

  let screenHeight = window.innerHeight;

  if(textPosition < (screenHeight-(screenHeight/4))){
    text.classList.add('appear');
  }
}
function textAppear2(){
  const text = document.querySelector('#para2');

  let textPosition = text.getBoundingClientRect().top;

  let screenHeight = window.innerHeight;

  if(textPosition < (screenHeight-(screenHeight/4))){
    text.classList.add('appear2');
  }
}

function navbarAppear(){
  const nav = document.querySelector();
}

window.addEventListener('scroll', textAppear);
window.addEventListener('scroll', textAppear2);
