// import gallary from '../tamplates/gallary.hbs';
import '../index.html';
import markup from '../tamplates/gallery.hbs';
import picturesAPI from './components/api.js';

const refs = {
    searchInput: document.querySelector('.search-form'),
    searchBTN: document.querySelector('#LoadMore'),
    markupGallery: document.querySelector('.gallery')
}

refs.searchBTN.addEventListener('click', onLoad);
refs.searchInput.addEventListener('submit', onSearch);
const picAPI = new picturesAPI();

function onSearch(e) {
    e.preventDefault()

    picAPI.query = e.currentTarget.elements.query.value; 
    picAPI.resetPage();
    refs.markupGallery.innerHTML = '';
    picAPI.fetch().then(pictures => {
        console.log(pictures)
        refs.markupGallery.insertAdjacentHTML('beforeend', markup(pictures))
        
    });
    
};

function onLoad(){
    picAPI.fetch().then(pictures => {
        refs.markupGallery.insertAdjacentHTML('beforeend', markup(pictures));
        const element = document.querySelector(`.page-${pictures.page}`);
        setTimeout(t =>  {element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })}, 200) 
    });    
}


