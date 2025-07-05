  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const thumbnails = document.querySelectorAll('.thumbnail');

  function showOverlay(imageUrl) {
    overlayImage.src = imageUrl;
    overlay.style.display = 'flex';
  }

  function hideOverlay() {
    overlay.style.display = 'none';
  }

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const imageUrl = this.dataset.image;
      showOverlay(imageUrl);
    });
  });
