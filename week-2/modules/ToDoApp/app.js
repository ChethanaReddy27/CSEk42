// importing task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. adding few sample tasks
console.log(addTask("Study JS", "high", "2026-02-10"));
console.log(addTask("Buy Books", "medium", "2026-02-05"));
console.log(addTask("Go Gym", "low", "2026-02-08"));

// 2. displaying all tasks
console.log("All Tasks List:");
console.log(getAllTasks());   // showing tasks

// 3. completing one task
console.log(completeTask(2));

// 4. displaying tasks again after completion
console.log("After Completing Task:");
console.log(getAllTasks());   // updated list