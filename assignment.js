for(let i = 1; i <= 50; i++) 
     if (i % 3 === 0 && i % 5 ===0)  
    console.log("FizzBuzz")
 else if (i % 3 === 0) {
   console.log("Fizz");
} else if (i % 5 === 0) {
    console.log("Buzz")
}  else {
    console.log(i)
}

let product = [ 
   { name: "Bag", price: 5000, instock: true},
    { name: "shoe", price: 10000, instock: false},
   {name: "Watch", price: 7000, instock: true}
];
 for(let i = 0; i < name.length; i++) {
    if (!name[i].instock)
    console.log(name[i].name + " - $" + products[i].price);
    total += name[i].price;
 }
    console.log("Total: $");

    let randomnumber = Math.floor(Math.random() * 20) + 1;
    let guess;
    let count = 0;
  while (guess !== randomnumber) {
    guess = Number(prompt("guess a number (1-20):"));
    count ++;
   if (guess > randomnumber) {
    alert("Too high");
   } else if (guess < randomnumber) {
    alert("Too low");

    } else { 
    alert("Correct! you tried" + count + "times.");
    }
 }

  function isEven(n) {
    return n % 2 === 0;
  }
   function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
   }
   function getInitials(name) {
   let parts = name.split(" ");
   return parts[0][0] + "." + parts[1][0];
   }
    function clamp(value, min, max) {
   if (value < min) return min;
   if (value > max) return max;
    return value;
    }
   function capitalize(str) {
   let words = str.split(" ");
   let result = []

   for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let newWord = word[0].toUpperCase() + word.slice(1);
    result.push(newWord);
   }
   return result.join(" ");
   }
  console.log(isEven(4));
  console.log(isEven(7));
  console.log(celsiusToFahrenheit(0));
  console.log(celsiusToFahrenheit(30))
  console.log(getInitials("Ada Okafor"));
  console.log(clamp(15, 10, 20));
  console.log(clamp(25, 10, 20));
  console.log(capitalize("hello world"));

  let products = [
  { name: "Bag", price: 5000, category: "Fashion", instock: true},
  {name: "Shoe", price: 10000, category: "Fashion", instock: false},
  {name: "Pen", price: 700, category: "Educational", instock: true},
  {name: "Phone", price: 250000, category: "Electronics", instock: true},
  {name: "Book", price: 20000, category: "Educational", instock: true},
  {name: "Cap", price: 1500, category: "Fashion", inStock: true},
  {name: "Watch", price: 7000, category: "Fashion", instock: false},
  {name: "Fan", price: 30000, category: "Electronics", inStock: true}
  ]
    let names = products.map(product => product.name);
    console.log(names)
    let inStockItems = products.filter(product => product.inStock);
    console.log(inStockItems);
    let found = products.find(product => product.name === "Phone");
    console.log(found);
    products.forEach(product => { 
        console.log(product.name + " -$" + product.price);
    })

    function calculate(a, operator, b) {
     switch (operator) {
      case "+":
     return a + b;

     case "-":
        return a * b
      case "/":
        if(b === 0) {
      return "Cannot divide by zero";
        }
     return a / b
        case "%":
        return a % b

        default:
            return "Invalid operator";
     }
    }


 console.log(calculate(10, "+", 5));
 console.log(calculate(10, "-", 5));
 console.log(calculate(10, "*", 5));
 console.log(calculate(10, "/", 5));
 console.log(calculate(10, "%", 3));
 console.log(calculate(10, "/", 0));
 console.log(calculate(10, "^", 2));
 console.log(calculate(20, "+", 30));
 