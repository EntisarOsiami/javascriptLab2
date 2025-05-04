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
