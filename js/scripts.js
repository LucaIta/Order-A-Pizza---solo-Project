// businnessLogic START

// orderedPizzasArray = []; // thisArray contains the pizzas ordered by the user

var numberOfPizzas = 0;
var userAddress = "";

function pizzas (size, toppings, number){ // pizza constructor
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
  this.number = number;
}

// this following prototype determines the pizza price

pizzas.prototype.prizeDeterminer = function () {
  var price = 5
  if (this.size === "medium") {
    price ++;
  } else if (this.size === "large") {
    price += 2;
  };
  this.toppings.forEach (function(topping){
    if (topping != "none"){
    price += 1.5;
    };
  });
  return price;
};

// businnessLogic END

// user interface START

// $("#size").click(function(){
//   console.log("hello");
// })

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    userAddress = $("#userAddress").val();
    pizzaSize = $("#size").val();
    var toppings = [];
    if ($("#topping1").val() != "none"){
      toppings.push($("#topping1").val());
    }
    if ($("#topping2").val() != "none"){
      toppings.push($("#topping2").val());
    }
    if ($("#topping3").val() != "none"){
      toppings.push($("#topping3").val());
    }
    if ($("#topping4").val() != "none"){
      toppings.push($("#topping4").val());
    }
    // var numberOfPizzas = orderedPizzasArray.length + 1;
    numberOfPizzas ++;
    var userPizza = new pizzas (pizzaSize, toppings, numberOfPizzas);
    userPizza.price = userPizza.prizeDeterminer();
    // orderedPizzasArray.push(userPizza);
    $("#orderedPizzaDisplayer").append("<li><span id=" + userPizza.number + ">Pizza number " + userPizza.number + " (" + userPizza.size + ")</span></li>");
    // $("#" + userPizza.number + "").click(function(){
    $("#orderedPizzaDisplayer li").last().click(function(){
      $("#sizeDetail").text("Size: " + userPizza.size);
      if (userPizza.toppings != 0){
      $("#toppingsDetail").text("Toppings: " + userPizza.toppings);
      } else {
        $("#toppingsDetail").empty(); // this line of code allow me to erase the "Toppings" section if no topping is selected for that pizza
      }
      $("#priceDetail").text("Price: " + userPizza.price);
    });
    $("#orderedPizza").show();
    if (userAddress != "") {
      $("#addressDisplayer").text("Your Pizza will be delivered at: " + userAddress);
    }
  })
  $("#orderButton").click(function(){
    $("#mainContainer").hide();
    if (numberOfPizzas != 0) {
      if (userAddress != ""){
      $("#finalContainer").append("<p>Order registered, you will be delivered " + numberOfPizzas + " pizzas at " + userAddress + "</p>")
    } else {
      $("#finalContainer").append("<p>Order registered, your pizza will be ready in 30 minutes</p>")
    }
    }
  });
});


// user interface END
