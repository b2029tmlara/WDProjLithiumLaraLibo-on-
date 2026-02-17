const chords = document.querySelectorAll(
    ".cMAJOR, .cdMAJOR, .dMAJOR, .deMajor, .eMAJOR, .fMAJOR, .fgMAJOR, .gMAJOR, .gaMAJOR, .aMAJOR, .abMAJOR, .bMAJOR, \
     .cMINOR, .cdMINOR, .dMINOR, .deMINOR, .eMINOR, .fMINOR, .fgMINOR, .gMINOR, .gaMINOR, .aMINOR, .abMINOR, .bMINOR"
);

chords.forEach(chord => {
    chord.addEventListener("click", function () {
        const soundFile = this.dataset.sound;

        if (!soundFile) return;

        const audio = new Audio(`../assets/${soundFile}.mp3`);
        audio.currentTime = 0; // allows rapid clicking
        audio.play();
    });
});