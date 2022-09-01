// console.log('hello photo album');
const loadPhotos = () =>{
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
    .then(res => res.json())
    .then(photos => displayPhotos(photos))
}
const displayPhotos = (photos) => {
    // console.log(photos);
    const photosContainer = document.getElementById('photos-container');
    photos.forEach(photo => {
        console.log(photo);
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML = `
        <div class="card">
          <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${photo.title.slice(0, 20)}</h5>
            <p class="card-text">Photo ID :- ${photo.id}</p>
            <p class="card-text">Photo URL :- ${photo.url}</p>
          </div>
        </div>
        `;
        photosContainer.appendChild(photoDiv);
    });
}

const searchPhoto = () => {
    const searchPhotoInputField = document.getElementById('search-input-field');
    const searchText = searchPhotoInputField.value;
    // console.log(searchText);
    loadPhotos(searchText);
    searchPhotoInputField.value = '';
}

loadPhotos();