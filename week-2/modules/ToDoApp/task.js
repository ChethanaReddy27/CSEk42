// importing validation functions
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];   // array to store all tasks
let id = 1;         // simple id counter

// 1. function to add new task
export function addTask(title, priority, dueDate) {

  // validating title
  if (!validateTitle(title)) {
    return "Invalid Title";
  }

  // validating priority
  if (!validatePriority(priority)) {
    return "Invalid Priority";
  }

  // validating due date
  if (!validateDueDate(dueDate)) {
    return "Invalid Due Date";
  }

  // creating task object
  const task = {
    id: id,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false   // by default task is not completed
  };

  tasks.push(task);   // adding task into array
  id++;               // increasing id for next task

  return "Task Added Successfully";
}

// 2. function to get all tasks
export function getAllTasks() {
  return tasks;   // returning full task list
}

// 3. function to complete a task
export function completeTask(taskId) {
  let found = false;   // to check task is present or not

  for (let i = 0; i < tasks.length; i++) {
    // checking id match
    if (tasks[i].id == taskId) {
      tasks[i].completed = true;   // marking as completed
      found = true;
      return "Task Completed";
    }
  }

  // if task id not found
  if (!found) {
    return "Task Not Found";
  }
}