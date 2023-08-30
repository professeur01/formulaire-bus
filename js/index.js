const endOperation = document.querySelector("#end");
endOperation.style.display = "none";

const form = document.querySelector("#wrapped");

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("click");
    const allInput = form.querySelectorAll("input");
    const allTextArea = form.querySelectorAll("textarea");
    const allSelect = form.querySelectorAll("select");
    console.log(getValue(allInput));
})


const getValue = elements => {
    const arr = [];
    elements.forEach(element => {
        arr.push(element.getAttribute("name"), element.value)
    });

    return arr;
}