// businnessLogic START

orderedPizzasArray = []; // thisArray contains the pizzas ordered by the user

function pizzas (size, toppings){ // pizza constructor
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
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
    toppings.push($("#topping1").val());
    toppings.push($("#topping2").val());
    toppings.push($("#topping3").val());
    toppings.push($("#topping4").val());
    var userPizza = new pizzas (pizzaSize, toppings);
    userPizza.price = userPizza.prizeDeterminer();
    orderedPizzasArray.push(userPizza);
    console.log(userPizza.toppings);
    console.log(userPizza.price);
    // $("#orderedPizzaDisplayer").append("<li>" + userPizza.size + "</li>"); this line of code would allow to append the pizzas by size

  })
})

// user interface END
