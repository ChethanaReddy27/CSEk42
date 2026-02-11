let courses = ["javascript", "react", "node", "mongodb", "express"];
//filter() courses with name length > 5
let longCourses = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", longCourses);
//map() to convert course names to uppercase
let upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Courses in uppercase:", upperCaseCourses);
//find() the course "react"
let reactCourse = courses.find(course => course === "react");
console.log("Found course 'react':", reactCourse);
//findIndex() of "node"
let nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of 'node':", nodeIndex);