const nameInputs = document.querySelector(".name-input");
const ageInputs = document.querySelector(".age-input");
const qualificationInputs = document.querySelector(".qualification-input");
const allInputs = document.querySelectorAll(".inputs");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");

let allRecords = JSON.parse(localStorage.getItem("list")) || [];

function saveToLocalStorage() {
    localStorage.setItem("list", JSON.stringify(allRecords));
}

function Records(userName, userAge, userQualification) {
    this.name = userName;
    this.age = userAge;
    this.qualification = userQualification;
}

function renderRecords() {
    allInputs.forEach((input) => {
        input.value = "";
    });
    list.innerHTML = "";
    for(let i = 0; i < allRecords.length; i++) {
        let items = allRecords[i];
        list.innerHTML += `<li> Name: ${items.name} | Age: ${items.age} | Qualification: ${items.qualification} </li>`;
    }
}

function addRecord() {
    let user = new Records(nameInputs.value, ageInputs.value, qualificationInputs.value);
    allRecords.push(user);
    saveToLocalStorage();
    renderRecords();
}

renderRecords();

addBtn.addEventListener("click", addRecord);

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addRecord();
    }
});