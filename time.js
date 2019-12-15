const clockContainer = document.querySelector(".header-box__middle-box");
const clockText = clockContainer.querySelector("span");

function clockSet() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  setInterval(clockSet, 1000);
}

init();
