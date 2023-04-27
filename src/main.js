// get references to the form and input fields
const form = document.querySelector('form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const messageInput = document.querySelector('#message-input');

// add event listener to form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  //Data object with input values
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value
  };

  console.log('submit event triggered');

  // API call to send form data
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    form.reset(); //Message sent, yay:)
    console.log('Form reset', data);
  })
  .catch((error) => {
    console.error('Error:', error); //Catch error if message is not sent
  });
});