
// movie -- age rating showtimes.
// put in their age -- pull out according to inputted age.
// if over 65 -2.
// Choose a movie --> display showtimes.
// look display time --> if matinee

//Business Logic

function movieTicket(movieName, showTime, age) {
  this.movieName = movieName;
  this.price = 13.75;
  this.showTime = showTime;
  this.rating = [];
  this.age = age;
}

movieTicket.prototype.priceCalculator = function () {
  if (this.showTime == "12:30 pm" || this.showTime == "2:15 pm") {
    this.price -= 2
  };
  if (this.age >= 65) {
    this.price -= 2
  };
  return this.price;
}

movieTicket.prototype.ratingCalculator = function () {
  if (this.movieName == "Cars" || this.movieName == "Monsters, Inc" || this.movieName == "Toy Story") {
    (this.rating).push("PG")
  }
  else {
    (this.rating).push("R")
  }
  return this.rating
}



//UI Logic

$(document).ready(function () {
  $("#moviesForm").submit(function (event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var time = $("#showtime").val();
    var age = $("#ageVerify").val();

    var newTicket = new movieTicket(movie, time, age);
    newTicket.ratingCalculator();
    newTicket.priceCalculator();
    $(".ticketResult").append(newTicket).val();
    console.log(newTicket);
  });
})