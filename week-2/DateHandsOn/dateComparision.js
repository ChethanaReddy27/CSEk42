// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
      let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
let todayy = new Date()
if(todayy <= enrollmentDeadline){
    console.log("Enrollment Open")
}
//       * Today is after deadline → "Enrollment Closed"
else{
    console.log("Enrollment closed")
}


//   2. Validate user input date:
//       * Input: "2026-02-30"
let input = "2026-01-26";

let parts = input.split("-");
let year = parseInt(parts[0]);
let month = parseInt(parts[1]);
let day = parseInt(parts[2]);

let ip_date = new Date(year, month - 1, day);

if (ip_date.getFullYear() == year && ip_date.getMonth() == month - 1 && ip_date.getDate() == day) {
    console.log("Valid date");
} else {
    console.log("Invalid date");
}