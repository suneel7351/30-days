const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');
const fullSizeBtn = document.getElementById('fullSizeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Replace 'YOUR_ACCESS_KEY' with your Unsplash API access key
const unsplashApiKey = 'VtKVSoHWnYNvbmvv6bKXWdsWo-0v-QooAKwb3IJK4JU';
const apiUrl = `https://api.unsplash.com/photos/?client_id=${unsplashApiKey}&per_page=20`;

// Fetch images from Unsplash API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach((photo, index) => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description;
      img.addEventListener('click', () => openModal(index));
      gallery.appendChild(img);
    });
  })
  .catch(error => console.error('Error fetching images:', error));

// Open modal with clicked image
function openModal(index) {
  currentIndex = index;
  modalImage.src = gallery.children[index].src;
  modal.showModal(); // Use showModal() to open the dialog
}

// Close modal
function closeModal() {
  modal.close(); // Use close() to close the dialog
}

// Change displayed image in modal
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = gallery.children.length - 1;
  } else if (currentIndex >= gallery.children.length) {
    currentIndex = 0;
  }
  modalImage.src = gallery.children[currentIndex].src;
}



// Event listeners
closeBtn.addEventListener('click', closeModal);
fullSizeBtn.addEventListener('click', openFullSize);
prevBtn.addEventListener('click', () => changeImage(-1));
nextBtn.addEventListener('click', () => changeImage(1));

// Listen for keyboard events when the modal is open
modal.addEventListener('keydown', handleKeyPress);

// Handle keyboard navigation in modal
function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowLeft':
      changeImage(-1);
      break;
    case 'ArrowRight':
      changeImage(1);
      break;
    case 'Escape':
      closeModal();
      break;
  }
}
