function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    
    if (!birthdateInput) {
        document.getElementById('age-result').innerText = "Please enter a valid birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    const birthMonth = birthdate.toLocaleString('default', { month: 'long' });
    const birthDay = birthdate.getDate();

    document.getElementById('age-result').innerText = `You are ${age} years old. Your birthday is on ${birthMonth} ${birthDay}.`;
}
