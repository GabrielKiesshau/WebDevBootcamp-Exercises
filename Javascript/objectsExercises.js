var movies = [
    {
        title: "Avengers: Infinity War",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Harry Potter: Philoser's Stone",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Mad Max Fury Road",
        rating: 4.5,
        hasWatched: false
    }
];

movies.forEach(movie => {
    console.log("You have " + (movie.hasWatched? "watched " : "not seen ") + movie.title +" - "+ movie.rating +" stars");
});