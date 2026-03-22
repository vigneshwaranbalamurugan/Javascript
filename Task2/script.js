const output = document.getElementById("output");

let expression = "";

function addValue(value) {
    expression += value;
    output.value = expression;
}

function clearOutput() {
    expression = "";
    output.value = "";
}

function calculate() {
    try {
        expression = eval(expression).toString();
        output.value = expression;
    } catch {
        output.value = "Error";
        expression = "";
    }
}

document.getElementById("zero").onclick = function() {
    addValue("0");
};
document.getElementById("one").onclick = function() {
    addValue("1");
};
document.getElementById("two").onclick = function() {
    addValue("2");
};
document.getElementById("three").onclick = function() {
    addValue("3");
};
document.getElementById("four").onclick = function() {
    addValue("4");
};
document.getElementById("five").onclick = function() {
    addValue("5");
};
document.getElementById("six").onclick = function() {
    addValue("6");
};
document.getElementById("seven").onclick = function() {
    addValue("7");
};
document.getElementById("eight").onclick = function() {
    addValue("8");
};
document.getElementById("nine").onclick = function() {
    addValue("9");
};
document.getElementById("add").onclick = function() {
    addValue("+");
};
document.getElementById("subtract").onclick = function() {
    addValue("-");
};
document.getElementById("multiply").onclick = function() {
    addValue("*");
};
document.getElementById("divide").onclick = function() {
    addValue("/");
};
document.getElementById("decimal").onclick = function() {
    addValue(".");
};

document.getElementById("equals").onclick = calculate;

document.getElementById("clear").onclick = clearOutput;