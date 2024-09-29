// Function to calculate age
function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  document.getElementById('ageResult').innerText = `Your Age: ${age} years`;
}

// Function to find the day of the week
function findDayOfWeek() {
  const dateInput = new Date(document.getElementById('dayOfWeekDate').value);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[dateInput.getDay()];
  document.getElementById('dayResult').innerText = `Day of the Week: ${day}`;
}
