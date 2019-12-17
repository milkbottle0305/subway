const stationSpan = document.querySelectorAll(".text");

/* modal component */
const modalContainer = document.querySelector(".modal");
const modalTitle = modalContainer.querySelector(".title");
const mainBtn = modalContainer.querySelector(".mainBtn");
const submitBtn = modalContainer.querySelector(".submitBtn");

/* 역 이름을 받는 임시변수 */
var tempTitle;

function toggleModal() {
  modalContainer.classList.toggle("show-modal");
}

function goTimeTable() {
  location.href = "stationtable.html?station=" + tempTitle;
}

function windowOnClick(event) {
  if (event.target === modalContainer) {
    toggleModal();
  }
}

function init() {
  stationSpan.forEach(
    span =>
      (span.onclick = function() {
        toggleModal();
        tempTitle = span.innerText;
        modalTitle.innerText = tempTitle;
      })
  );
}

mainBtn.addEventListener("click", toggleModal);
submitBtn.addEventListener("click", goTimeTable);
window.addEventListener("click", windowOnClick);

init();
