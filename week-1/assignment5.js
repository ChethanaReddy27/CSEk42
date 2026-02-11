let marks = [78, 92, 35, 88, 40, 67];
//filter() marks ≥ 40 (pass marks)
let passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks);
//map() to add 5 grace marks to each student
let updatedMarks = marks.map(mark => mark + 5);
console.log("Updated Marks with Grace:", updatedMarks);
//reduce() to find highest mark
let highestMark = marks.reduce((highest, mark) => mark > highest ? mark : highest, marks[0]);
console.log("Highest Mark:", highestMark);
//ind() first mark below 40
let firstFailMark = marks.find(mark => mark < 40);
console.log("First Fail Mark:", firstFailMark);
//findIndex() of mark 92
let indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of Mark 92:", indexOf92);