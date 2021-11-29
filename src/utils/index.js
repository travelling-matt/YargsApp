const movieArr = [];

class Movie {
    constructor(title, actor, director) {
        this.title = title;
        this.actor = actor;
        this.director = director;
    }

    add() {
        movieArr.push(this);
    }
}

module.exports = {
    Movie, 
    movieArr,
};