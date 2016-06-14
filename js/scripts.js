//business logic
function Ticket(time, age) {
  this.time = time;
  this.age = age;
  this.price = null;
  this.movie = [];
}

function Movie(name, release){
  this.name = name;
  this.release = release;
}

Ticket.prototype.getPrice = function() {
  if(this.age > 65 || this.time < 17 || this.movie.release === 0 ){
    this.price = 10;
  }else{
    this.price = 15;
  }
}

function resetFields() {
  $("input#movie-name").val("");
  $("input#new-time").val("");
  $("input.new-age").val("");
}

var movieTimes = function(){
  for(var i=11;i<24;i++){
    $("select#movie-time").append("<option value='"+ i +"'>" + i + ":00</option>")
  }
}

// user interface logic
$(document).ready(function() {
  movieTimes();

  $("form#movie").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("select#movie-name").text();
    var inputtedRelease = $("select#movie-name").val();
    var inputtedTime = $("select#movie-time").val();
    var inputtedAge = $("input.new-age").val();

    if(inputtedName && inputtedRelease && inputtedTime && inputtedAge){
      var newTicket = new Ticket(inputtedTime, inputtedAge);
      var newMovie= new Movie(inputtedName, inputtedRelease);
      newTicket.movie.push(newMovie);
      newTicket.getPrice();
      $("#price").text(newTicket.price);
    }
    else{
      $("#price").text("Please enter all information");
    }

    resetFields();
  });
});
