/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// ---------====================---------\r\n// =========--------------------=========\r\n//              Time Section\r\n// =========--------------------=========\r\n// ---------====================---------\r\n\r\nconst CurrentTimeContainer = document.querySelector(\".current-time\");\r\nconst CurrentDateContainer = document.querySelector(\".current-date\");\r\n\r\nsetInterval(() => {\r\n    let TimeAndDay = new Date();\r\n    CurrentTimeContainer.innerText = TimeAndDay.toLocaleTimeString();\r\n    CurrentDateContainer.innerText = TimeAndDay.toLocaleDateString();\r\n}, 1000)\r\n\r\n// ---------====================---------\r\n// =========--------------------=========\r\n//             Quotes Section\r\n// =========--------------------=========\r\n// ---------====================---------\r\n\r\nconst QuoteContainer = document.querySelector(\".quote-gen\");\r\n\r\nfetch('./quotes.json')\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    QuoteContainer.innerText = data.Quotes[Math.floor(Math.random() * data.Quotes.length)][\"Quote\"];\r\n  })\r\n  .catch(err => console.log(err));\r\n\r\n\r\n// ---------====================---------\r\n// =========--------------------=========\r\n//      Testosterone Foods Section\r\n// =========--------------------=========\r\n// ---------====================---------\r\n\r\nconst TestosteroneContainer = document.querySelector(\"#testosterone-container\");\r\n\r\nfetch('./testosterone_foods.json')\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    TestosteroneContainer.innerText = data.Foods[Math.floor(Math.random() * data.Foods.length)][\"Food\"];\r\n  })\r\n  .catch(err => console.log(err));\r\n\r\n// ---------====================---------\r\n// =========--------------------=========\r\n//          Calorie Foods Section\r\n// =========--------------------=========\r\n// ---------====================---------\r\n\r\nconst CalorieContainer = document.querySelector(\"#calorie-container\");\r\n\r\nfetch('./calories_foods.json')\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    CalorieContainer.innerText = data.Foods[Math.floor(Math.random() * data.Foods.length)][\"Food\"];\r\n  })\r\n  .catch(err => console.log(err));\r\n\r\n// ---------====================---------\r\n// =========--------------------=========\r\n//          Protien Foods Section\r\n// =========--------------------=========\r\n// ---------====================---------\r\n\r\nconst ProtienContainer = document.querySelector(\"#protien-container\");\r\n\r\nfetch('./protien_foods.json')\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    ProtienContainer.innerText = data.Foods[Math.floor(Math.random() * data.Foods.length)][\"Food\"];\r\n  })\r\n  .catch(err => console.log(err));\r\n\r\n// ---------====================---------\r\n// =========--------------------=========\r\n//           Good Habits Section\r\n// =========--------------------=========\r\n// ---------====================---------\r\n\r\nconst HabitsContainer = document.querySelector(\"#habit-container\");\r\n\r\nfetch('./habits.json')\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    HabitsContainer.innerText = data.Habits[Math.floor(Math.random() * data.Habits.length)][\"Habit\"];\r\n  })\r\n  .catch(err => console.log(err));\n\n//# sourceURL=webpack://3d-website/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;