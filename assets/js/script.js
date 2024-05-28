const lines = document.querySelectorAll(".line")
const allX = document.querySelectorAll(".x")
const nextButton = document.querySelector(".nextButton")
const prevButton = document.querySelector(".prevButton")

let currentAllXIndex = 0;
let currentLineIndex = 0;
const lastDivIndex = allX.length - 1;
let currentDivIndex = 0;


function showCurrentBox() {
    for (let i = 0; i < allX.length; i++) {
        if (i <= currentAllXIndex) {
            allX[i].classList.add('active');
        } else {
            allX[i].classList.remove('active');
        }
    }
}

nextButton.addEventListener("click", function () {
    currentAllXIndex = (currentAllXIndex + 1) % allX.length;
    showCurrentBox();

    if (currentLineIndex < lines.length) {
        lines[currentLineIndex].style.backgroundColor = 'green';
        currentLineIndex++;
        
    }

})

nextButton.disabled = false;

prevButton.addEventListener("click", function () {
    if (currentAllXIndex > 0) {
        currentAllXIndex = currentAllXIndex - 1;
        showCurrentBox();
    } else {
        for (let i = 0; i < allX.length; i++) {
            allX[i].classList.remove('active');
        }
    }

    if (currentLineIndex > 0) {
        currentLineIndex--;
        lines[currentLineIndex].style.backgroundColor = 'white';
    }
})

showCurrentBox();














