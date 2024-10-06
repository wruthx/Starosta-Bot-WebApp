const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
  modalText.textContent = "олег)";
  modal.style.display = "flex";
});

btn2.addEventListener("click", function() {
  modalText.textContent = "ніяк";
  modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});