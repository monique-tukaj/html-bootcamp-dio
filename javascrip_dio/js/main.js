var line = gets().split(" ");
var A = parseInt(line[7]);
var B = parseInt(line[11]);
var total = 7 + 11; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);

function clickHere(){
    document.getElementById("appreciation").innerHTML = "<b>Thank you for clicking on it.</b>";
    //console.log(document.getElementById("appreciation"));
    //alert("Thank you for pressing it");
}

function redirection(){
    //window.open("https://web.digitalinnovation.one/");
    window.location.href = "https://web.digitalinnovation.one/";
}

function change(element){
     //document.getElementById("mousemove").innerHTML = "Thank you for hoovering the mouse.";
     element.innerHTML = "Thank you for hoovering the mouse";
    //alert("Change text");
}

function returnTo(element){
    //document.getElementById("mousemove").innerHTML = "Hoover the mouse here";
    element.innerHTML = "Hoover the mouse here";
}

function load(){
    alert("Page loaded");
}

function functionChange(element){
    console.log(element.value);
}


//This function sum n1 and n2
function sum(n1, n2){
    return n1 + n2;
}

function validateAge(age){
    var validate;
    if (age >= 18){
        validate = true
    }else{
        validate = false   
    }
    return validate;
}
var age = prompt("How old are you?");
console.log(validateAge(age));
//Two different ways to display the value.
console.log(sum(5, 10));
alert(sum(5, 10)); 

//Working with array and dictionaries
var fruits = [{name:"apple", color:"red"},{name:"grape", color:"purple"}]
console.log(fruits);


//The code bellow displays the fruit's name in the position number 1, grape.
alert(fruits[1].name); 
var fruits = {name:"apple", color:"red"}
console.log(fruits.name);
alert(fruits.name);


//Different possibilities to work using Array
var list = ["apple", "orange", "banana"];


//add a new element
list.push("grape");


//eliminate an element
list.pop();
console.log(list);


//Turn the array into a string
console.log(list.toString());


//replace comma "," to space + dash inside the string
console.log(list.join(" - "));
var age = 29;
var nome = "Monique Pereira";
var age2 = 10;
var phrase = "Japan is the best team of the world";
alert(nome + " is " + age + " years old.");
alert(age + age2);
console.log(nome);
console.log(age);
console.log(phrase.toLowerCase());
