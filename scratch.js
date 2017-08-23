// if - else statement
var price = 15.00; // cost of item
var money = 20.00; // net worth

if (money >= price) {
    console.log("buy hammer");
} else {
    console.log("don\'t buy hammer");
}


// if - else if - else statement
var weather = 'sunny';

if (weather === 'snow') {
  console.log("bring a coat");
} else if (weather === 'rain') {
  console.log("bring an umbrella");
} else {
  console.log("wear what you want");
}


// musicians code:
var musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}


// murder mystery
// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
  solved = true;
  weapon = "knife";
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  solved = true;
  weapon = "trophy";
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  solved = true;
  weapon = "pool stick";
} else {
  solved = true;
  weapon = "poison";
}


if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!"
);
}


// weekend plans

var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}


// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
} else if (checkBalance === true && isActive === true && balance > 0) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance === true && isActive === false) {
  console.log("Your account is no longer active.");
} else if (checkBalance === true && balance === 0 && isActive === true) {
  console.log("Your account is empty");
} else if (checkBalance === true && balance < 0 && isActive === true) {
  console.log("Your balance is negative. Please contact bank.");
} else {
  console.log("");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here

if ((shirtWidth >= 18 && shirtWidth < 20 ) && (shirtLength >= 28 && shirtLength < 29 ) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38 )) {
  console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22 ) && (shirtLength >= 29 && shirtLength < 30 ) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63 )) {
  console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24 ) && (shirtLength >= 30 && shirtLength < 31 ) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88 )) {
  console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26 ) && (shirtLength >= 31 && shirtLength < 33 ) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63 )) {
  console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28 ) && (shirtLength >= 33 && shirtLength < 34 ) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13 )) {
  console.log("2XL");
} else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
  console.log("3XL");
} else {
  console.log("N/A");
}


// Ternary operator
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals)? "omnivore" : ((eatsPlants && !eatsAnimals)? "herbivore" : ((!eatsPlants && eatsAnimals)? "carnivore" : undefined));

console.log(category);


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here

switch (education) {
  case "no high school diploma":
    salary = "$25,636";
    break;
  case "a high school diploma":
    salary = "$35,256";
    break;
  case "an Associate's degree":
    salary = "$41,496";
    break;
  case "a Bachelor's degree":
    salary = "$59,124";
    break;
  case "a Master's degree":
    salary = "$69,732";
    break;
  case "a Professional degree":
    salary = "$89,960";
    break;
  case "a Doctoral degree":
    salary = "$84,396";
    break;
}

console.log("In 2015, a person with " + education + " earned an average of " + salary + "/year.");


// while loops

var x = 1
while (x < 10000) {
  console.log(x + " mississipi!");
  x = x + 1;
}


var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}


/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James")
    } else {
        console.log(x)
    }
    x = x + 1;
    // print Julia, James, or JuliaJames
    // increment x
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    // check value of num
    if (num > 2) {
      console.log( num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    } else if (num === 2) {
      console.log( num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!");
    } else if (num === 1) {
      console.log( num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}
