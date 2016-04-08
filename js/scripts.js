// businnessLogic START

orderedPizzasArray = []; // thisArray contains the pizzas ordered by the user

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
    event.preventDefault();
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
    var numberOfPizzas = orderedPizzasArray.length + 1;
    var userPizza = new pizzas (pizzaSize, toppings, numberOfPizzas);
    userPizza.price = userPizza.prizeDeterminer();
    orderedPizzasArray.push(userPizza);
    $("#orderedPizzaDisplayer").append("<li><span id=" + userPizza.number + ">Pizza number " + userPizza.number + "</span></li>");
    // $("#orderedPizzaDisplayer").text(orderedPizzasArray.forEach);
    $("#" + userPizza.number + "").click(function(){
      $("#sizeDetail").text(userPizza.size);
      $("#toppingsDetail").text(userPizza.toppings);
      $("#priceDetail").text(userPizza.price);
    })
  })
})

// user interface END
