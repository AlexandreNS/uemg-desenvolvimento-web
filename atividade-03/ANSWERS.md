# Atividade JavaScript Básico - Respostas 

**OBS.:** Respostas organizadas pelo nome da seção e nome da atividade do site [w3schools](https://www.w3schools.com/js/exercise_js.asp)

## 1 - JS Variables
### Exercise 1

```js

var carName = "Volvo";

```

### Exercise 2

```js

var x = 50

```

### Exercise 3

```js

var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;

```

### Exercise 4

```js

var x = 5;
var y = 10;
var z = x + y;
alert(z);

```

### Exercise 5

```js

var firstName = "John", lastName = "Doe", age = 35;
```
## 2 - JS Operators
### Exercise 1

```js

alert(10 * 5);
```

### Exercise 2

```js

alert(10 / 2);
```

### Exercise 3

```js

alert(15 % 9);
```

### Exercise 4

```js

x = 10;
y = 5;
x += y;

```

### Exercise 5

```js

x = 10;
y = 5;
x *= y;

```
## 3 - JS Data Types
### Exercise 1

```js

let length = 16;          // Number
let lastName = "Johnson"; // String
const x = {
  firstName: "John",
  lastName: "Doe"
};                        // Object

```
## 4 - JS Functions
### Exercise 1

```js

function myFunction() {
  alert("Hello World!");
}
myFunction();

```

### Exercise 2

```js

function myFunction() {
  alert("Hello World!");
}

```

### Exercise 3

```js

function myFunction() {
  return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

```

### Exercise 4

```js

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello";
}

```
## 5 - JS Objects
### Exercise 1

```js

const person = {
  firstName: "John",
  lastName: "Doe"
};

alert(person.firstName);

```

### Exercise 2

```js

const person = {
  firstName: "John",
  lastName: "Doe",
  country: "Norway"
};

```

### Exercise 3

```js

const person = {
  name: "John", age: 50
};
alert(person.name + " is " + person.age);

```
## 6 - JS Events
### Exercise 1

```html
<button onclick="alert('Hello')">Click me.</button>
```

### Exercise 2

```html
<button onclick="myFunction()">Click me.</button>
```

### Exercise 3

```html
<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>
```
## 7 - JS Strings
### Exercise 1

```js

let txt = "Hello World!";
let x = txt.length;
alert(x);

```

### Exercise 2

```js

let txt = "We are \"Vikings\"";
alert(txt);

```

### Exercise 3

```js

let str1 = "Hello ";
let str2 = "World!";
alert(str1 + str2);

```
## 8 - JS String Methods
### Exercise 1

```js

let txt = "Hello World!";
txt = txt.toUpperCase();

```

### Exercise 2

```js

let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);

```

### Exercise 3

```js

let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");

```

### Exercise 4

```js

let txt = "Hello World";
txt = txt.toUpperCase();

```

### Exercise 5

```js

let txt = "Hello World";
txt = txt.toLowerCase();

```
## 9 - JS Arrays
### Exercise 1

```js

const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

```

### Exercise 2

```js

const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";

```

### Exercise 3

```js

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

```
## 10 - JS Array Methods
### Exercise 1

```js

const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();

```

### Exercise 2

```js

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");

```

### Exercise 3

```js

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);

```
## 11 - JS Array Sort
### Exercise 1

```js

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();

```
## 12 - JS Dates
### Exercise 1

```js

const d = new Date();
alert(d);

```

### Exercise 2

```js

const d = new Date();
year = d.getFullYear();

```

### Exercise 3

```js

const d = new Date();
month = d.getMonth();

```

### Exercise 4

```js

const d = new Date();
d.setFullYear(2020);

```
## 13 - JS Math
### Exercise 1

```js

let r = Math.random();

```

### Exercise 2

```js

let x = Math.max(10, 20);

```

### Exercise 3

```js

let x = Math.round(5.3);

```

### Exercise 4

```js

let x = Math.sqrt(9);

```
## 14 - JS Comparisons
### Exercise 1

```js

x = 10;
y = 5;
alert(x > y);

```

### Exercise 2

```js

x = 10;
y = 10;
alert(x == y);

```

### Exercise 3

```js

x = 10;
y = 5;
alert(x != y);

```

### Exercise 4

```js

var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);

```
## 15 - JS Conditions
### Exercise 1

```js

if (x > y) {
  alert("Hello World");
}

```

### Exercise 2

```js

if (x > y) {
  alert("Hello World");
} else {
  alert("Goodbye");
}

```
## 16 - JS Switch
### Exercise 1

```js

switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;    
}

```

### Exercise 2

```js

switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
  default:
    alert("Neither");
}

```
## 17 - JS For Loops
### Exercise 1

```js

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

```

### Exercise 2

```js

const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

```
## 18 - JS While Loops
### Exercise 1

```js

let i = 0;
while (i < 10) {
  console.log(i);
  i++
}

```

### Exercise 2

```js

let i = 0;
while (i < 10) {
  console.log(i);
  i = i + 2;
}

```
## 19 - JS Break Loops
### Exercise 1

```js

for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

```

### Exercise 2

```js

for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

```
## 20 - JS HTML DOM
### Exercise 1

```html
<p id="demo"></p>

<script>
  document.getElementById("demo").innerHTML = "Hello";
</script>
```

### Exercise 2

```html
<p id="demo"></p>

<script>
  document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>
```

### Exercise 3

```html
<p class="test"></p>
<p class="test"></p>

<script>
  document.getElementsByClassName("test")[0].innerHTML = "Hello";
</script>
```

### Exercise 4

```html
<img id="image" src="smiley.gif">

<script>
  document.getElementById("image").src = "pic_mountain.jpg";
</script>
```

### Exercise 5

```html
<input type="text" id="myText" value="Hello">

<script>
  document.getElementById("myText").value = "Have a nice day!";
</script>
```

### Exercise 6

```html
<p id="demo"></p>

<script>
  document.getElementById("demo").style.color = "red";
</script>
```

### Exercise 7

```html
<p id="demo"></p>

<script>
  document.getElementById("demo").style.fontSize = "40px";
</script>
```

### Exercise 8

```html
<p id="demo"></p>

<script>
  document.getElementById("demo").style.display = "none";
</script>
```

### Exercise 9

```html
<button id="demo">Click me1</button>

<script>
  document.getElementById("demo").addEventListener("click", myFunction);
</script>
```
