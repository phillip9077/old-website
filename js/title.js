const text = document.querySelector('.loading-title');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
    let char = "";
    if(splitText[i] === " ") {
        char = splitText[i] + "&nbsp";
    }
    else {
        char = splitText[i];
    }
    text.innerHTML += "<span>" + char + "</span>";
}


let char = 0;
let timer = setTimeout(run, 3500);

function run() {
    setInterval(onTick, 350);
}

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length) {
        complete();
        return; 
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}