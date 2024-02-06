// Function to determine if the user is a child or an adult based on age
function checkAge(age) {
    if (age < 18) {
        document.getElementById('childCard').style.display = 'block';
        document.getElementById('adultCard').style.display = 'none';
        document.getElementById('childAge').innerText = age;
    } else {
        document.getElementById('childCard').style.display = 'none';
        document.getElementById('adultCard').style.display = 'block';
        document.getElementById('adultAge').innerText = age;
    }
}

// Example age values
var userAge = prompt('Enter your age:');

// Check the age and display the appropriate card
checkAge(userAge);
