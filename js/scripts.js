// businnessLogic START

var arrayOfPizzas = [];
var numberOfPizzas = 0;
var userAddress = "";

var pizzaDisplayer = function(arrayOfPizzas){
  $("#orderedPizzaDisplayer").empty();
  arrayOfPizzas.forEach(function(pizza){
    $("#orderedPizzaDisplayer").append("<li><span id=" + pizza.number + ">Pizza number " + pizza.number + " (" + pizza.size + ")</span></li>");
    $("#orderedPizzaDisplayer li").last().click(function(){
      $("#sizeDetail").text("Size: " + pizza.size);
      if (pizza.toppings != 0){
      $("#toppingsDetail").text("Toppings: " + pizza.toppings);
      } else {
        $("#toppingsDetail").empty(); // this line of code allow me to erase the "Toppings" section if no topping is selected for that pizza
      }
      $("#priceDetail").text("Price: " + pizza.price + "$");
    });
    $("#orderedPizzaDisplayer li").last().dblclick(function(){
      $(this).remove();
      arrayOfPizzas.splice(($(this).attr("id")),1)
      $("#numberOfPizzasDisplayer").text("Number of pizzas Ordered: " + arrayOfPizzas.length);
    });
  });
  $("#numberOfPizzasDisplayer").text("Number of pizzas Ordered: " + arrayOfPizzas.length);
};

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

$(document).ready(function(){
  $("form").submit(function(event){
    $("#pizzasDetail").show();
    $("#orderButton").show();
    event.preventDefault();
    userAddress = $("#userAddress").val();
    pizzaSize = $("#size").val();
    var toppings = [];
    $(".checkbox input").each(function(){
      if (this.checked === true){
        toppings.push($(this).val());
      }
    })
    numberOfPizzas ++;
    var userPizza = new pizzas (pizzaSize, toppings, numberOfPizzas);
    userPizza.price = userPizza.prizeDeterminer();
    arrayOfPizzas.push(userPizza);
    console.log(arrayOfPizzas);
    pizzaDisplayer(arrayOfPizzas);

    $("#orderedPizza").show();
    if (userAddress != "") {
      $("#addressDisplayer").text("Your Pizza will be delivered at: " + userAddress);
    }
  })
  $("#orderButton").click(function(){
    $("#mainContainer").hide();
    $("#finalContainer").show();
    if (numberOfPizzas != 0) {
      if (userAddress != ""){
      $("#finalContainer").append("<p>Order registered, you will be delivered " + arrayOfPizzas.length + " pizzas at " + userAddress + "</p>")
      } else {
        $("#finalContainer").append("<p>Order registered, your " + arrayOfPizzas.length + " pizzas  pizza will be ready in 30 minutes</p>")
      }
    }
  });
});

// user interface END
