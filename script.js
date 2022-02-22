// --- GET DATA FROM data.json ---

const data = require("./data.json");

// --- GET AGE NOT USING THE "DATE JAVASCRIPT OBJECTS" ---

// const currentYear = 2022;

// const getAge = () => {
//   data.map((data) => {
//     const age = currentYear - parseInt(data.birthdate.substring(6));
//     console.log(`${data.name} : ${age}`);
//   });
// };

// getAge();

// --- GET AGE USING THE "DATE JAVASCRIPT OBJECTS" ---

const dateToday = new Date();
const currentYear = dateToday.getFullYear();

const getAge = () => {
  data.map((data) => {
    const dateBirthdate = new Date(data.birthdate);
    const yearBirthdate = dateBirthdate.getFullYear();

    const age = currentYear - yearBirthdate;

    console.log(`${data.name} : ${age}`);
  });
};

getAge();
