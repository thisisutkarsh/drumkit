function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`)
    if (!audio)
        return; // stop when other keys are pressed
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform")
        return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // first add transition and then call removeTransitition
window.addEventListener("keydown", playSound);