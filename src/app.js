const yargs = require("yargs");

const { Movie, movieArr } = require("./utils");

//'yargs' returns an object. 'process' returns and array. object is easier for us to work with.
// console.log(yargs.argv);
// console.log(process.argv);

//const movie = new Movie(args.movie, args.actor);
//'args.movie' and 'args.actor' replace 'args[3]' and 'args[4]'we used this morning
// this also means that the input can be in a different order as it is named.

const app = (args) => {
    switch(process.argv[2]){
        case "add":
            const movie = new Movie(args.title, args.actor, args.director);
            movie.add();
            console.log(movieArr);
            break;
        case "add multi":
            const movie1 = new Movie(args.title1, args.actor1, args.director1);
            const movie2 = new Movie(args.title2, args.actor2, args.director2);
            movie1.add();
            movie2.add();
            console.log(movieArr);
            break;
        default:
            console.log("Incorrect command");
            break;
    }
};

app(yargs.argv);

//args.name must match input name. put -- in front of name (see below)
//node src/app.js "add" --title="spiderman" --actor="tom holland"
//expected result
//[ Movie { title: 'spiderman', actor: 'tom holland' } ]