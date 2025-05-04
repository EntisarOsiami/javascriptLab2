// w4-D1-L2

//first question
let connectionSpeed = "500";
let connectionType = "fiber";


if (connectionSpeed < 0) {
    console.log("Invalid connection speed");
} else if (connectionType == "fiber") {

    if (connectionSpeed >= 500) {
        console.log("Excellent fiber connection");
    } else if (connectionSpeed >= 200 && connectionSpeed < 499) {
        console.log("Good fiber connection");
    } else {
        console.log("Weak fiber connection");
    }

} else if (connectionType == "dsl") {

    if (connectionSpeed >= 50) {
        console.log("Acceptable DSL connection");
    } else {
        console.log("Poor DSL connection");
    }

} else  {
    console.log("Unknown connection type");
}

//second question
grade = 85;

if (grade >= 90) {
    console.log("A");
}
else if(grade >= 80) {
    console.log("B");
}
else if(grade >= 70) {
    console.log("C");
} 
else if(grade >= 60) {
    console.log("D");
}
else if(grade < 60) {
    console.log("f");
}

//third question

let dish = "pizza";
let size = "large";
let extraCheese = true;


if (dish == "pizza"&& size == "large" && extraCheese == true) {
    console.log("Large pizza with extra cheese is ready!");
} else if (dish == "pizza" && size !== "large") {
    console.log("Custom pizza size selected!");
} else if(dish == "pizza" && extraCheese == false) {
    console.log("Pizza without extra cheese");
} else if (dish !== 'pizza'){     console.log("Not a pizza")
}


// extra questions: 
//note to self: search more about the ternary operator and how to use it!!!
let eatsPlants = true;
let eatsAnimals = false;

console.log(
    eatsPlants && eatsAnimals ? "Omnivore" :
    eatsPlants && !eatsAnimals ? "Herbivore" :
    eatsAnimals && !eatsPlants ? "Carnivore" :
    "Undefined"
);

//extra question 2

let musicians =3;

if (musicians <=0) {
    console.log("Not a group");
} else if (musicians == 1) {
    console.log("Solo");
} else if (musicians == 2) {
    console.log("Duet");
} else if (musicians == 3) {
    console.log("Trio");
}else if (musicians == 4) {
    console.log("Quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}



//extra question 3



//extra question 4

let balance = -433;
let checkBalance = true;
let isActive = true;


if (checkBalance == false) {
    console.log("No balance check is allowed");
} else if (checkBalance == true && isActive == false) {
    console.log("Your account is inactive");
} else if (checkBalance == true && isActive == true) {
    console.log(`you account balance is $${balance}`);
}

//extra question 5

let flavor = "chocolate";
let topping = "sprinkles";
let vessel = "cone";


if (flavor == "vanilla" && topping == "sprinkles" && vessel == "cone") {
    console.log("Vanilla ice cream with sprinkles in a cone is ready!");
} else if (flavor == "chocolate" && topping == "peanuts" && vessel == "bowl") {
    console.log("Chocolate ice cream with peanuts in a bowl is ready!");
} else if (flavor == "vanilla" && topping == "peanuts" && vessel == "bowl") {
    console.log("Vanilla ice cream with peanuts in a bowl is ready!");
} else if (flavor == "chocolate" && topping == "sprinkles" && vessel == "cone") {
    console.log(` * "I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${topping}."`);
} else {
    console.log("Invalid order");
}