const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

let angkaPertama = null;
let operator = null;
let hasil = "";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Get the value of the button that was clicked
        const target = event.target;
        const value = target.innerText;

        if (target.id === "AC") {
            angkaPertama = null;
            operator = null;
            hasil = "";
            display.innerText = "0";
        } else if (target.id === "%") {
            display.innerText = parseFloat(display.innerText) / 100;
        } else if (
            target.id === "/" ||
            target.id === "x" ||
            target.id === "-" ||
            target.id === "+"
        ) {
            operator = value;
            angkaPertama = parseFloat(display.innerText);
            hasil = "";
        } else if (target.id === "equals") {
            const angkaKedua = parseFloat(display.innerText);
                if (operator === "+") {
                    angkaPertama = angkaPertama + angkaKedua;
                } else if (operator === "-") {
                    angkaPertama = angkaPertama - angkaKedua;
                } else if (operator === "\u00D7") {
                    angkaPertama = angkaPertama * angkaKedua;
                } else if (operator === "\u00F7") {
                    angkaPertama = angkaPertama / angkaKedua;
                }
                hasil = angkaPertama.toString();
                display.innerText = angkaPertama;                
        } else {
            if (value === "." && hasil.includes(".")) {
                return;
            }
            hasil += value;
            display.innerText = hasil;
        }
    });
});