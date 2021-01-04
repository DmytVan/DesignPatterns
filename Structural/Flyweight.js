class Movies {
    constructor(name, genre) {
        this._name = name;
        this._genre = genre;
    }

    getName() {
        return this._name
    }

    getGenre() {
        return this._genre;
    }
}

class FilmFactory {
    constructor() {
        this._films = {};
    }

    add(name, genre) {
        if (this._films.hasOwnProperty(name)) {
            console.log(`Фильм ${name} был найден`);
            return this._films[name];
        }
        console.log(`Фильм ${name} был создан`);
        const movie = new Movies(name, genre);
        this._films[name] = movie;
        return movie
    }
}

const films = new FilmFactory();
films.add('Matrix', 'fantasy');
films.add('Spider-Man', 'adventure');

films.add('Spider-Man', 'adventure');

console.log('\n', films._films)

