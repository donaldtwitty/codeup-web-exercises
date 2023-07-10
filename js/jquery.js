"use strict";
// $(document).keyup(function (event) {
//     console.log(event.keyCode);
// });
const konami_code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
const imgSrc = "https://media.giphy.com/media/5Lde07vLz8en6s66Zz/giphy-downsized-large.gif"
let konami_index = 0;

function checkKonamiCode(event) {
    if (event.code === konami_code[konami_index]) {
        konami_index++;
        if (konami_index === konami_code.length) {
            console.log("CONGRATULATIONS!!! You have added 30 lives!");
            alert("CONGRATULATIONS!!! You have added 30 lives!");
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc;
            document.body.appendChild(imgElement);
            const h1Element = document.querySelector("h1");
            h1Element.textContent = "Git In There!!!";
            konami_index = 0;
        }
    } else {
        konami_index = 0;
    }
}

document.addEventListener("keydown", checkKonamiCode);

