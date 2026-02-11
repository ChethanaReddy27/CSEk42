// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.

let date1 = new Date()
console.log(date1.toString())

//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let week_days = ["Sunday", "Monday", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let yr = date1.getFullYear()
console.log(date1.getFullYear())

let month = date1.getMonth()
console.log(months[date1.getMonth()])

console.log(week_days[date1.getDay()])
console.log("Time:", date1.getHours() + ":" +date1.getMinutes() + ":" + date1.getSeconds())

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

console.log(date1.getDate()+"-"+month+"-"+yr, date1.getHours() + ":" +date1.getMinutes() + ":" + date1.getSeconds())