var num = 3;
console.log(num + 5);
document.write("some of 3 and 5 is 8 <br> ");
var num = 5 - 3;
console.log(num);
var num = 5 % 3;
console.log(num);
var num = 5 * 3;
console.log(num);
var num = 5 / 3;
console.log(num);
var undefinited;
document.write("value after variable declaration is:", undefinited, "<br>");
var initial = 5;
console.log(initial);
document.write("initial value is 5");
++initial;
document.write("value after incerment 6  <br> ");
console.log(initial);
var initial = 6 + 7;

console.log(initial);
document.write("value after increament is 13  <br> ");
--initial;

console.log(initial);

document.write("value after decreament is 12 <br>");
var initial = 12 / 3;

console.log(initial);

document.write("the remainder is 0 <br>");
var ticketPrice = 600;
console.log(ticketPrice * 5);
document.write("total cost to buy 5 tickets to movies is 3000PKR <br>");
document.write("<h1>Table 0f 4</h1> <br>");
var multiplication = 4 * 1;
console.log(multiplication);
document.write("4 x 1 = ", multiplication, "<br>");
var multiplication = 4 * 2;
console.log(multiplication);
document.write("4 x 2 = ", multiplication, "<br>");
var multiplication = 4 * 3;
console.log(multiplication);
document.write("4 x 3 = ", multiplication, "<br>");
var multiplication = 4 * 4;
console.log(multiplication);
document.write("4 x 4 = ", multiplication, "<br>");
var multiplication = 4 * 5;
console.log(multiplication);
document.write("4 x 5 = ", multiplication, "<br>");
var multiplication = 4 * 6;
console.log(multiplication);
document.write("4 x 6 = ", multiplication, "<br>");
var multiplication = 4 * 7;
console.log(multiplication);
document.write("4 x 7 = ", multiplication, "<br>");
var multiplication = 4 * 8;
console.log(multiplication, ",br>");
document.write("4 x 8 = ", multiplication, "<br>");
var multiplication = 4 * 9;
console.log(multiplication);
document.write("4 x 9 = ", multiplication, "br>");
var multiplication = 4 * 10;
console.log(multiplication);
document.write("4 x 10 = ", multiplication, "<br>");

var celsius = "25";
var fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius, "°C is ", fahrenheit, "°F");

document.write(celsius, "°C is ", fahrenheit, "°F <br>");
var fahrenheit2 = 70;
var celsius2 = ((fahrenheit2 - 32) * 5) / 9;

console.log(fahrenheit2, "°F is ", celsius2, "°C");
document.write(fahrenheit2, "°F is ", celsius2, "°C <br>");

document.write("<h1>Shopping Cart</h1> <br>");
// var item1 = 650;
// console.log(item1);
// var item2 = 100 * 7;
// console.log(item2);
// var shippingcharges = 100;
// console.log(shippingcharges);
// var totalcost = item1 + item2 + shippingcharges;
// document.write("price of item1 " + )
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var totalCost1 = 650 * 3;
var totalCost2 = 100 * 7;
var shipping = 100;
console.log(item1 * 3);
console.log(item2 * 7);
document.write("price of item 1 is ", item1, "<br>");
document.write("Quantity of item 1 is 3 <br>");
document.write("price of item 2 is ", item2, "<br>");
document.write("Quantity of item 2 is 7 <br>");
document.write("Shipping charges", shipping, "<br>");
var totalCost = totalCost1 + totalCost2 + shipping;
console.log(totalCost);

document.write("total cost of your order is  ", totalCost, "<br>");
document.write("<h2>Mark Sheet </h2>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;
console.log(totalMarks);
console.log(marksObtained);
console.log(percentage);
document.write("Total marks: ", totalMarks, "<br>");
document.write("marks obtained ", marksObtained, "<br>");
document.write("percentage ", percentage, "<br>");
document.write("<h1> Currency in PKR </h1> <br>");
// var  = 1748;
// document.write("Currency: ", currency, "<br>");
// console.log( currency);
var usDollar = 104.8;
var totalDollar = usDollar * 10;
console.log(totalDollar);
var saudiRiyals = 28;
var totalRiyals = saudiRiyals * 25;
console.log(totalRiyals);
var currencyPKR = totalDollar + totalRiyals;

console.log(currencyPKR);

document.write(" Total Currency in PKR: ", currencyPKR, "<br>");

var arithmetic = 4;
var arithmetic = (4 + 5 * 10) / 2;
console.log(arithmetic);
document.write("<h1> age calculator </h1><br>");

var currentYear = 2016;
document.write("current year : ", currentYear, "<br>");
var birthYear = 1992;
document.write("birth year : ", birthYear, "<br>");
var age = currentYear - birthYear;
console.log(age);

document.write("age : ", age, "<br>");

document.write(" <h1> the Geometrizer </h1> <br>")
var radius = 20 
console.log (radius)
document.write("Radius of a circle " , radius, "<br>") 
var circumference = 2*3.142*radius

console.log(circumference)
document.write ("The circumference is " , circumference , "<br>")

var area = 3.142*radius*radius

console.log(area )

document.write("The area is ", area , "<br>") 
document.write(" <h1> The Lifetime Supply Calculator </h1> <br>")
var favouriteSnacks = "chocolatechip"
console.log(favouriteSnacks)

document.write("Favourite Snacks: ", favouriteSnacks, "<br>")
var currentAge = 15
console.log(currentAge)
document.write("Current Age: ", currentAge, "<br>")

var maxAge = 65
console.log(maxAge)

document.write("Estimated  Maximum Age: ", maxAge, "<br>")
var perDay = 3
console.log(perDay)
document.write(" Amount of Snacks Per day: ", perDay, "<br>")
var totalNeed = (maxAge-currentAge)*3

console.log(totalNeed)
document.write("you will need " , totalNeed ,"\xa0", favouriteSnacks , " to last you until the rip old age of " , maxAge)
