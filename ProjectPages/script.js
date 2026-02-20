const chords = document.querySelectorAll(
    ".cMAJOR, .cdMAJOR, .dMAJOR, .deMAJOR, .eMAJOR, .fMAJOR, .fgMAJOR, .gMAJOR, .gaMAJOR, .aMAJOR, .abMAJOR, .bMAJOR, \
     .cMINOR, .cdMINOR, .dMINOR, .deMINOR, .eMINOR, .fMINOR, .fgMINOR, .gMINOR, .gaMINOR, .aMINOR, .abMINOR, .bMINOR"
);

chords.forEach(chord => {
    chord.addEventListener("click", function () {
        const soundFile = this.dataset.sound;

        if (!soundFile) return;

        const audio = new Audio(`../audio-files/${soundFile}.mp3`);
        audio.currentTime = 0; // allows rapid clicking
        audio.play();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pianoContainer = document.getElementById('piano-container');
    const whiteKeyWidth = 25;
    const blackKeyWidth = 16;

    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const startOctave = 0;
    const endOctave = 8;
    
    let keyPosition = 0;
    let startIndex = 9; 

    for (let o = startOctave; o <= endOctave; o++) {
        let start = (o === 0) ? startIndex : 0;
        let end = (o === endOctave) ? 1 : notes.length;

        for (let i = start; i < end; i++) {
            const note = notes[i];
            const noteName = `${note}${o}`;
            
            if (noteName === 'A0') {
                keyPosition = 0;
            } else if (noteName === 'B0') {
                keyPosition = 1;
            }

            const key = document.createElement('div');
            key.classList.add('key');
            key.setAttribute('data-note', noteName);
            
            if (note.includes('#')) {
                key.classList.add('black');
                key.style.left = `${keyPosition * whiteKeyWidth - (blackKeyWidth / 2)}px`;
            } else {
                key.classList.add('white');
                key.style.left = `${keyPosition * whiteKeyWidth}px`;
                keyPosition++;
            }
            
            pianoContainer.appendChild(key);
        }
    }
    
    pianoContainer.addEventListener('mousedown', (event) => {
        const clickedKey = event.target.closest('.key');
        if (clickedKey) {
            clickedKey.classList.add('pressed');
        }
    });

    document.addEventListener('mouseup', () => {
        document.querySelectorAll('.key.pressed').forEach(k => k.classList.remove('pressed'));
    });

    const keyboardMap = {
        'z': 'A0', 'x': 'B0',
        'a': 'C1', 'w': 'C#1', 's': 'D1', 'e': 'D#1', 'd': 'E1', 'f': 'F1', 't': 'F#1', 'g': 'G1', 'y': 'G#1', 'h': 'A1', 'u': 'A#1', 'j': 'B1',
        'k': 'C2', 'o': 'C#2', 'l': 'D2', 'p': 'D#2', ';': 'E2', "'": 'F2', '[': 'F#2', ']': 'G2', '\\': 'G#2',
        '1': 'A2', '2': 'A#2', '3': 'B2',
    };

    document.addEventListener('keydown', (event) => {
        const note = keyboardMap[event.key.toLowerCase()];
        if (note) {
            const keyElement = document.querySelector(`.key[data-note="${note}"]`);
            if (keyElement && !keyElement.classList.contains('pressed')) {
                keyElement.classList.add('pressed');
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        const note = keyboardMap[event.key.toLowerCase()];
        if (note) {
            const keyElement = document.querySelector(`.key[data-note="${note}"]`);
            if (keyElement) {
                keyElement.classList.remove('pressed');
            }
        }
    });
});

 // Event handler for submit and reset confirmations
        function confirmAction(type) {
            const message = type === 'submit' 
                ? "Are you sure you want to submit your application?" 
                : "Are you sure you want to clear all entered information?";
            return confirm(message);
        }

        // Event handler for onblur validation
        function checkEmpty(element) {
            if (element.value.trim() === "") {
                element.classList.add("input-error");
            } else {
                element.classList.remove("input-error");
            }
        }

// Saving form data
function saveFormData(event) {
    event.preventDefault(); // prevent default form submission

    // Run confirmation first
    if (!confirmAction('submit')) {
        return; // stop if user clicks Cancel
    }

    const formData = {
        fullName: document.getElementById("full-Name").value,
        birthday: document.getElementById("bDay").value,
        email: document.getElementById("eMail").value,
        skillLevel: document.getElementById("skill-Level").value,
        genre: document.getElementById("musicGenre").value,
        practiceTime: document.getElementById("practice-time").value,
        goal: document.getElementById("musicGoal").value,
        practiceDays: []
    };

    // Get checked days
    const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");
    checkboxes.forEach(box => {
        if (box.checked) {
            formData.practiceDays.push(box.id);
        }
    });

    // Store in localStorage
    localStorage.setItem("pianoUserData", JSON.stringify(formData));

    alert("Information saved successfully!");
    window.location.href = "../index.html";

}