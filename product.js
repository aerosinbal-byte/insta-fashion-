document.querySelector('.buy-now').addEventListener('click', () => {
  alert('Redirecting to payment...');
});

document.querySelector('.add-cart').addEventListener('click', () => {
  alert('Added to cart!');
});
document.querySelector('.buy-now').addEventListener('click', () => {
  alert('Redirecting to payment...');
});

document.querySelector('.add-cart').addEventListener('click', () => {
  alert('Added to cart!');
});
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your review!');
  // Future: Save review to backend or localStorage
});
function showMedia(type, src) {
  const container = document.getElementById('mainMedia');
  container.innerHTML = '';

  if (type === 'img') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    container.appendChild(img);
  } else if (type === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    container.appendChild(video);
  }
}
let currentSlide = 0;

function showSlide(index) {
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentSlide = index;

}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Swipe support for mobile
let startX = 0;
document.getElementById('slider').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.getElementById('slider').addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});
function setMedia(type, src) {
  const container = document.getElementById('mainDisplay');
  container.innerHTML = '';

  if (type === 'img') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    container.appendChild(img);
  } else if (type === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    container.appendChild(video);
  }
}
function setMedia(type, src) {
  const container = document.getElementById('mainDisplay');
  container.innerHTML = '';

  if (type === 'img') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    container.appendChild(img);
  } else if (type === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    container.appendChild(video);
  }
}

let currentIndex = 0;

function moveSlide(direction) {
  const track = document.getElementById('carouselTrack');
  const items = track.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalItems - 1;
  if (currentIndex >= totalItems) currentIndex = 0;

  const offset = currentIndex * items[0].offsetWidth;
  track.style.transform = translateX
}
function buyNow(productId) {
  // Optional: store productId in localStorage
  localStorage.setItem('selectedProduct', productId);
  window.location.href = 'checkout.html';
}