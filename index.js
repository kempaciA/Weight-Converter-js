const inputEl = document.getElementById("input");

const errorEl = document.getElementById("error");

const resultEL = document.getElementById("result");

let errorTime;

let resultTime;

function updateResults() {
    if(inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.innerText = "please enter a valid number"
        errorTime = setTimeout(() => {
            errorEl.innerText ='';
            inputEl.value = '';
        }, 2000);
    } else {
        resultEL.innerText = (+inputEl.value / 2.2).
        toFixed(2);

        clearTimeout(resultTime)
         resultTime = setTimeout(() => {
            resultEL.innerText = "";
            inputEl.value = "";
        }, 10000)
    }

}



inputEl.addEventListener("input", updateResults);