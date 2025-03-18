let input = document.getElementById("noteInput");
let result = document.querySelector(".result");
let key = "userNote";

// function to save note in local storage
function saveNoteToLocalStorage() {
  const note = input.value;
  localStorage.setItem(key, note);
  result.textContent = "Note saved!";
}

// function to get note from local storage
function loadNoteFromLocalStorage() {
  const savedNote = localStorage.getItem(key);
  if (savedNote) {
    input.value = savedNote;
    result.textContent = "Loaded saved note.";
  }
}

// function to remove note from local storage
function clearNoteFromLocalStorage() {
  localStorage.removeItem(key);
  input.value = "";
  result.textContent = "Note cleared from local storage.";
}

document
  .getElementById("saveNote")
  .addEventListener("click", saveNoteToLocalStorage);

document
  .getElementById("clearNote")
  .addEventListener("click", clearNoteFromLocalStorage);

// Load note automatically on page load if available.
window.addEventListener("load", loadNoteFromLocalStorage);
