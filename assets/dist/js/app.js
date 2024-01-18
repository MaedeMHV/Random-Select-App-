const textArea = document.querySelector("#textArea");
const tags = document.querySelector(".tags");

textArea.focus();
textArea.addEventListener("keyup", (e) => {
  splitTags(textArea.value);
  //or you can use splitTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      textArea.value = "";
    }, 100);

    selectRandom();
  }
});

function splitTags(input) {
  //split tags with comma
  let choices = input.split(",");
  //   only use tags that aren't "" or in another word there is nothing between two comma for example red,blue,,green
  choices = choices.filter((tag) => tag.trim() !== "");
  //if there is space before and after a tag the space will be removed
  choices = choices.map((tag) => tag.trim());

  tags.innerHTML = "";

  choices.forEach((tag) => {
    const choice = document.createElement("div");

    choice.classList.add("tag");
    choice.innerHTML = tag;
    tags.appendChild(choice);
  });
}

function selectRandom() {
  //searching or switching between choices
  const interval = setInterval(() => {
    const randomTag = RandomChooser();
    selectedTag(randomTag);
    // unselect the tag or choice
    setTimeout(() => {
      unSelectedTag(randomTag);
    }, 100);
  }, 100);
  // find the final random choice
  setTimeout(() => {
    clearInterval(interval);
    const randomTag = RandomChooser();
    chosenTag(randomTag);
  }, 2000);
}
function RandomChooser() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
function selectedTag(e) {
  e.classList.add("selected");
}
function unSelectedTag(e) {
  e.classList.remove("selected");
}
function chosenTag(e) {
  e.classList.add("chosen");
}
