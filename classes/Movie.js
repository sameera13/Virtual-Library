// import the Media class:

// create your Movie class:
const Media = require('./Media');

class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  

  static longestMovie(movies) {
    return movies.reduce((longest, current) => current.duration > longest.duration ? current : longest);
  }
}

// don't change below
module.exports = Movie;