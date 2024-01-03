import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.submitForm');
const input = document.querySelector('.submitInput');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const MY_KEY = '41590527-3cc425bd48b0e10304cc9b3d1';
const BASE_URL = 'https://pixabay.com/api/';

form.addEventListener('submit', onSearche);
loader.style.display = 'none';

function onSearche(event) {
  event.preventDefault();

  let name = input.value;

  gallery.innerHTML = '';
  input.value = '';
  loader.style.display = 'block';

  const searchParams = new URLSearchParams({
    key: MY_KEY,
    q: name,
    per_page: '40',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      loader.style.display = 'none';
      if (!response.ok) {
        throw new Error('Request is not ok');
      }

      return response.json();
    })
    .then(photos => {
      if (photos.hits.length === 0 || name === '') {
        iziToast.error({
          timeout: '2000',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          backgroundColor: '#EF4040',
          position: 'topRight',
        });
        return;
      }

      gallery.innerHTML = renderPhoto(photos.hits);
      const refreshPage = new SimpleLightbox('.gallery a', {
        nav: true,
        captionDelay: 250,
        captionsData: 'alt',
        close: true,
        enableKeyboard: true,
        docClose: true,
      });
      refreshPage.refresh();
    });
}

function renderPhoto(photos) {
  return photos.reduce(
    (
      html,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      html +
      ` <li class="gallery-item">
              
              <a class="gallery-link" href="${largeImageURL}">
                  <img
                  src="${webformatURL}"
                  alt="${tags}"
                  width="360"
                  />
              </a>    
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${likes}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${views}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${comments}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${downloads}</p>
            </div>
          </div>              
       </li>`,
    ''
  );
}
