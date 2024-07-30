document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const galleryContainer = document.getElementById('gallery-container');
    const photoForm = document.getElementById('photo-form');
    const photoUrlInput = document.getElementById('photo-url');

    photoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        const photoUrl = photoUrlInput.value.trim();
        if (photoUrl) {
            console.log('Adding photo:', photoUrl);
            addPhoto(photoUrl);
            photoUrlInput.value = '';
        }
    });

    function addPhoto(url) {
        console.log('Creating photo element for URL:', url);
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';

        const img = document.createElement('img');
        img.src = url;

        photoDiv.appendChild(img);
        galleryContainer.appendChild(photoDiv);

        photoDiv.addEventListener('click', function() {
            if (img.style.transform === 'scale(2)') {
                img.style.transform = 'scale(1)';
            } else {
                img.style.transform = 'scale(2)';
            }
        });
    }
});

