export default class picturesAPI {
    constructor() { 
        this.searchQuery = '';
        this.page = 1;
    };

    fetch() {
        console.log(this)

        const URL = `https://pixabay.com/api/?&key=22022516-c571923560df7aebf84694af6&image_type=photo
        &orientation=horizontal
        &q=${this.searchQuery}
        &page=${this.page}
        &per_page=12`;
            
        return fetch(URL)
            .then(r => r.json())
            .then(data => {
                data.page = this.page;
                this.incrementPage();
                return data;
            });
    };

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};