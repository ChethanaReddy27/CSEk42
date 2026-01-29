// checking task title
export function validateTitle(title) {
  // title should not be empty and must have atleast 3 letters
  if (title == "" || title.length < 3) {
    return false;
  }
  return true;
}

// checking priority value
export function validatePriority(priority) {
  // only these three priorities are allowed
  if (priority == "low" || priority == "medium" || priority == "high") {
    return true;
  }
  return false;
}

// checking due date
export function validateDueDate(date) {
  const today = new Date();          // current date
  const givenDate = new Date(date);  // user given date

  // due date should be future date
  if (givenDate > today) {
    return true;
  }
  return false;
}