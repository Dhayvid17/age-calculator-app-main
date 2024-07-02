const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");

const inputYear = document.querySelector(".input-year");
const inputMonth = document.querySelector(".input-month");
const inputDay = document.querySelector(".input-day");
const submitBtn = document.querySelector(".submit-btn");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

let isValid = false;

submitBtn.addEventListener("click", calculateDate)

inputDay.addEventListener("input", () => {
    if (+inputDay.value > 31) {
        errorDay.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorDay.textContent = "";
    }
    if (+inputDay.value === 0) {
        isValid = false;
        errorDay.textContent = "This field is required";
        return;
    } else {
        errorDay.textContent = "";
        isValid = true;
    }
});

inputMonth.addEventListener("input", () => {
    if (+inputMonth.value > 12) {
        errorMonth.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorMonth.textContent = "";
    }
    if (+inputMonth.value === 0) {
        isValid = false;
        errorMonth.textContent = "This field is required";
        return;
    } else {
        errorMonth.textContent = "";
        isValid = true;
    }
});

inputYear.addEventListener("input", () => {
    if (+inputYear.value > 2024) {
        errorYear.textContent = "Must be in the past";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorYear.textContent = "";
    }
    if (+inputYear.value === 0) {
        isValid = false;
        errorYear.textContent = "This field is required";
        return;
    } else {
        errorYear.textContent = "";
        isValid = true;
    }
});

function calculateDate() {
    if ((+inputDay.value > 30 && (parseInt(inputMonth.value, 10) === 4 || parseInt(inputMonth.value, 10) === 6 || parseInt(inputMonth.value, 10) === 9 || parseInt(inputMonth.value, 10) === 11)) || 
        (+inputDay.value > 28 && parseInt(inputMonth.value, 10) === 2 && !isLeapYear(+inputYear.value)) ||
        (+inputDay.value > 29 && parseInt(inputMonth.value, 10) === 2 && isLeapYear(+inputYear.value))) {
        isValid = false;
        errorDay.textContent = "Must be a valid date";
        return;
    } else {
        errorDay.textContent = "";
        isValid = true;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    if (!inputDay.value) {
        errorDay.innerHTML = "This field is required";
        return;
    }

    if (!inputMonth.value) {
        errorMonth.innerHTML = "This field is required";
        return;
    }

    if (!inputYear.value) {
        errorYear.innerHTML = "This field is required";
        return;
    }

    if (isValid) {
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthday)
        let birthdayObj = new Date(birthday);
        let ageDifference = Date.now() - birthdayObj;
        let ageDate = new Date(ageDifference);

        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;

        outputDay.innerHTML = ageDay;
        outputMonth.innerHTML = ageMonth;
        outputYear.innerHTML = ageYear;
    } else {
        alert("Error")
    }

}




