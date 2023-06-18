// ---------====================---------
// =========--------------------=========
//              Time Section
// =========--------------------=========
// ---------====================---------

const CurrentTimeContainer = document.querySelector(".current-time");
const CurrentDateContainer = document.querySelector(".current-date");

setInterval(() => {
    let TimeAndDay = new Date();
    CurrentTimeContainer.innerText = TimeAndDay.toLocaleTimeString();
    CurrentDateContainer.innerText = TimeAndDay.toLocaleDateString();
}, 1000)

// ---------====================---------
// =========--------------------=========
//             Quotes Section
// =========--------------------=========
// ---------====================---------

const QuoteContainer = document.querySelector(".quote-gen");

fetch('./quotes.json')
  .then(res => res.json())
  .then(data => {
    QuoteContainer.innerText = data.Quotes[Math.floor(Math.random() * data.Quotes.length)]["Quote"];
  })
  .catch(err => console.log(err));


// ---------====================---------
// =========--------------------=========
//      Testosterone Foods Section
// =========--------------------=========
// ---------====================---------

const TestosteroneContainer = document.querySelector("#testosterone-container");

fetch('./testosterone_foods.json')
  .then(res => res.json())
  .then(data => {
    TestosteroneContainer.innerText = data.Foods[Math.floor(Math.random() * data.Foods.length)]["Food"];
  })
  .catch(err => console.log(err));

// ---------====================---------
// =========--------------------=========
//          Calorie Foods Section
// =========--------------------=========
// ---------====================---------

const CalorieContainer = document.querySelector("#calorie-container");

fetch('./calories_foods.json')
  .then(res => res.json())
  .then(data => {
    CalorieContainer.innerText = data.Foods[Math.floor(Math.random() * data.Foods.length)]["Food"];
  })
  .catch(err => console.log(err));

// ---------====================---------
// =========--------------------=========
//          Protien Foods Section
// =========--------------------=========
// ---------====================---------

const ProtienContainer = document.querySelector("#protien-container");

fetch('./protien_foods.json')
  .then(res => res.json())
  .then(data => {
    ProtienContainer.innerText = data.Foods[Math.floor(Math.random() * data.Foods.length)]["Food"];
  })
  .catch(err => console.log(err));

// ---------====================---------
// =========--------------------=========
//           Good Habits Section
// =========--------------------=========
// ---------====================---------

const HabitsContainer = document.querySelector("#habit-container");

fetch('./habits.json')
  .then(res => res.json())
  .then(data => {
    HabitsContainer.innerText = data.Habits[Math.floor(Math.random() * data.Habits.length)]["Habit"];
  })
  .catch(err => console.log(err));