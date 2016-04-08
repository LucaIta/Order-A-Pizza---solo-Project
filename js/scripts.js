// businnessLogic START

function pizzas (size, toppings){ // pizza constructor
  this.size = size;
  this.toppings = toppings;
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
    price += 1.5;
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
    toppings.push($("#topping2").val()); // here I need to understand what happens if one lement of the array is empty
    var userPizza = new pizzas (pizzaSize, toppings);
    console.log(userPizza.prizeDeterminer());
  })
})

// user interface END
