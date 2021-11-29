const movieArr = 
    [
        {
        title: 'Inception',
        actor: 'Leonardo Di Caprio',
        director: 'Christopher Nolan'
        },
        {
        title: 'Interstellar',
        actor: 'Matthew McCaungahey',
        director: 'Christopher Nolan'
        }
    ];

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

// class Remove {
//     constructor(position) {
//     this.position = position;
//     }

//     remove() {
//         movieArr.splice(this);
//         // movieArr.pop;
//     }

// }

module.exports = {
    Movie, 
    movieArr,
    //Remove,
};

