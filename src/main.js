fetch('https://my-json-server.typicode.com/mumbi-prog/ArtHive-project/categories')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    let filteredData = data;

    const renderGallery = () => {
      gallery.innerHTML = '';

      filteredData.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'art-category';

        const categoryName = document.createElement('h3');
        categoryName.textContent = category.name;
        categoryDiv.appendChild(categoryName);

        category.artItems.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'art-item';

          const itemImg = document.createElement('img');
          itemImg.src = item.image;
          itemImg.alt = item.description;
          itemImg.classList.add('art-item-img'); 
          itemDiv.appendChild(itemImg);

          const itemDesc = document.createElement('p');
          itemDesc.textContent = item.description;
          itemDiv.appendChild(itemDesc);

          const itemArtist = document.createElement('p');
          itemArtist.textContent = `Artist: ${item.artist}`;
          itemDiv.appendChild(itemArtist);

          const itemPrice = document.createElement('p');
          itemPrice.textContent = `Price: Ksh. ${item.price}`;
          itemDiv.appendChild(itemPrice);

          const likeBtn = document.createElement('button');
          likeBtn.className = 'like-btn bx bx-like';
          likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('bx-filled');
          });
          itemDiv.appendChild(likeBtn);

          categoryDiv.appendChild(itemDiv);
        });

        gallery.appendChild(categoryDiv);
      });
    };

    renderGallery();

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
      const searchValue = searchInput.value.toLowerCase().trim();
      filteredData = data.filter(category => category.name.toLowerCase().includes(searchValue));
      renderGallery();
    });
  })
  .catch(error => console.error(error));

//------------------------------------------------------------------------------------------//

// Function to display the reviews
fetch('https://my-json-server.typicode.com/mumbi-prog/ArtHive-project/reviews')
.then(response => response.json())
.then(data => {
  const reviewsList = document.getElementById('reviews-list');
  data.forEach(review => {
    const li = document.createElement('li');
    li.innerHTML = `<h3 class="review-name">${review.name} - ${review.rating}</h3><p class="review-comment">${review.comment}</p>`;
    reviewsList.appendChild(li);
  });
})
.catch(error => console.error(error));

//------------------------------------------------------------------------------------------//

// Function to submit the form
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

  // Display success message
  alert('Message sent!');

    // Reset the input field values
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    messageInput.value = '';
  }

// Add event listener to submit button
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitForm);





