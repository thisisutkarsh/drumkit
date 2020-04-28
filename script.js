window.addEventListener("keydown", (e) => {
    playSound(e.keyCode);
});
// Playsound for keypress
function playSound(key) {
    const audio = document.querySelector(`audio[data-key = "${key}"]`);
    if (!audio) return; // stop when other keys are pressed
    audio.currentTime = 0; // rewind to the start
    audio.play();
    const div = document.querySelector(`div[data-key = "${key}"]`);
    div.classList.add("playing");
}

// Removing transition
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// First wait for ending of transition and then call removeTransitition
//Remove transition
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}


// Making responsive to mouse click
document.querySelectorAll("div.key").forEach((div) => {
    div.addEventListener("click", handleClick);
});

function handleClick() {
    const key = this.dataset.key;
    // To access any data- element in JS, we use "dataset" property. If we have data - key, it becomes: dataset.key
    if (key) {
        playSound(key);
    }
}