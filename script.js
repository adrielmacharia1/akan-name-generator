/**
 * Akan Name Generator
 * Calculates a traditional Ghanaian name based on birth day and gender
 */

// DOM Elements
const dobInput = document.getElementById('dob');
const resultDiv = document.getElementById('result');
const generateBtn = document.querySelector('button');

// Akan naming data
const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", 
  "Wednesday", "Thursday", "Friday", "Saturday"
];

// Main function to generate the Akan name
function generateAkanName() {
  const birthDate = new Date(dobInput.value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  
  // Validate input
  if (!birthDate.getTime()) {
    showError("Please enter a valid date");
    return;
  }
  
  const dayOfWeek = birthDate.getDay();
  const akanName = akanNames[gender][dayOfWeek];
  const dayName = daysOfWeek[dayOfWeek];
  
  displayResult(dayName, akanName);
}

// Display the result
function displayResult(day, name) {
  resultDiv.innerHTML = `
    <p>You were born on a <strong>${day}</strong>.</p>
    <p>Your Akan name is <strong>${name}</strong>!</p>
  `;
}

// Show error message
function showError(message) {
  resultDiv.innerHTML = `<p class="error">${message}</p>`;
}

// Event listeners
generateBtn.addEventListener('click', generateAkanName);

// Allow Enter key to submit
dobInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateAkanName();
  }
});