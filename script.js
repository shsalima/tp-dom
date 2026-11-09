let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let resultat = document.getElementById("resultat");

let operation = "";


function Addition() {
    operation = "+";
}


function Soustraction() {
    operation = "-";
}


function Multiplication() {
    operation = "*";
}


function Division() {
    operation = "/";
}

function Calculer() {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);

    if (num1.value === "" || num2.value === "") {
        resultat.innerHTML = "Entrez deux nombres";
    }

    else if (operation === "+") {
        resultat.innerHTML = "Résultat : " + (n1 + n2);
    }

    else if (operation === "-") {
        resultat.innerHTML = "Résultat : " + (n1 - n2);
    }

    else if (operation === "*") {
        resultat.innerHTML = "Résultat : " + (n1 * n2);
    }

    else if (operation === "/") {

        if (n2 === 0) {
            resultat.innerHTML = "Division impossible par 0";
        } else {
            resultat.innerHTML = "Résultat : " + (n1 / n2);
        }

    }

    else {
        resultat.innerHTML = "Choisissez une opération";
    }
}


function Effacer() {

    num1.value = "";
    num2.value = "";

    operation = "";

    resultat.innerHTML = "Résultat :";
}