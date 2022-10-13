export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const result = await this.getResource(`/characters?page=5&pageSize=10`);
        return result.map(this._transformCharacter);
    };

    getCharacters = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    };

    getAllHouses = async () => {
        const result = await this.getResource(`/houses?page=5&pageSize=10`);
        return result.map(this._transformHouses);
    };

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouses(house);
    };

    getAllBooks = async () => {
        const result = await this.getResource(`/books?page=1&pageSize=10`);
        return result.map(this._transformBook);
 
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
      
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        };
    }

    _transformHouses = (house) => {
        return {
            id: this._extractId(house),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        };
    }



    _transformBook = (books) => {
        return {
            id: this._extractId(books),
            name: books.name,
            numberOfPages: books.numberOfPages,
            publiser: books.publiser,
            released: books.released,
        };
    }
}

// const got = new GotService();
// got.getAllCharacters().
//     then((response) => {
//         response.forEach(item=>console.log(item.name))
//     });

// got.getCharacters(130).
//     then((response) => console.log(response));

//Отправка данных на сервер
// fetch(url, {
//     method: 'POST',
//     body:JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// .then(response=>response.json())
// .then(myJson=>console.log('Success', myJson))
// .catch(error=>console.error('Error', error))

//Получение данных
// fetch('https://jsonplaceholder.typicode.com/posts/1') //получаем промис
//     .then((response) => {
//         return response.json();
//     }) //трансформирует данные в нужный нам формат и тоже возвращает промис
//     .then(myJson=>console.log(myJson))
