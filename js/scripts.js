// Business Logic
function whatTriangleIsIt(side1, side2, side3) {
    
    let result;

    if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
        result = "Not A Triangle!";
    } else if (side1 === side2 && side1 === side3) {
        result = "it's an equilateral!";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        result = "it's an isosceles!";
    } else if (side1 != side2 && side1 != side3) {
        result = "It's a Scalene";
    } 
    return result;
}

// UI Logic
function printResult(inputParam) {
    document.querySelector(".theResult").innerText = inputParam;
}

function handleHandleCheck(e) {
    e.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);

    const triResult = whatTriangleIsIt(side1, side2, side3);

    printResult(triResult);
}

function handleFormEvent () {
    const form = document.getElementById("formid");
    form.addEventListener("submit", handleHandleCheck);
}

window.addEventListener("load", handleFormEvent);