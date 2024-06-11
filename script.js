document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodSelected = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(el => el.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    if (foodSelected.length < 2) {
        alert('Please select at least 2 food items.');
        return;
    }

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${foodSelected.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    document.querySelector('#recordsTable tbody').appendChild(newRow);

    document.getElementById('userForm').reset();
});
