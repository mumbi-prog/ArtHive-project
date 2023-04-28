function submitForm(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the input fields and their values
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const phoneInput = document.getElementById('phone-input');
  const messageInput = document.getElementById('message-input');
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const messageValue = messageInput.value;

  // Reset the input field values
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  messageInput.value = '';
}

  // Display success message
  alert('Message sent!');

// Add event listener to submit button
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitForm);

