function handleHandleCheck(e) {
    e.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);

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
    document.querySelector(".theResult").innerText = result;
}
window.addEventListener("load", function () {
    const form = document.getElementById("formid");
    form.addEventListener("submit",handleHandleCheck);
});