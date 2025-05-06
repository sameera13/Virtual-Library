// Import classes here to console.log and debug
const Media = require('./Media');
const Book = require('./Book');
const Movie = require('./Movie');
const Music = require('./Music');

// Media Test
const media1 = new Media('The Catcher in the Rye', 1951, 'Fiction');
console.log(media1.summary());  // "Title: The Catcher in the Rye, Year: 1951, Genre: Fiction"
console.log('Media count:', Media.totalMediaCount);

// Book Test
const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
console.log(book1.summary());
console.log('Highest rated book:', Book.highestRating([book1, book2]).title);
console.log('Media count:', Media.totalMediaCount);

// Movie Test
const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
console.log(movie1.summary());
console.log('Longest movie:', Movie.longestMovie([movie1, movie2]).title);
console.log('Media count:', Media.totalMediaCount);

// Music Test
const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 'Lemonade', 3949);
const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 'Beyonce', 3734);
console.log(music2.summary());
console.log('Shortest album:', Music.shortestAlbum([music1, music2]).title);
console.log('Media count:', Media.totalMediaCount);
