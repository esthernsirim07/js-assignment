function changeheading() {
    document.getElementById("title"). innerHTML= "Keep Going!"
}

function motivate() {
    document.getElementById("message"). innerHTML= "You can do it!"
}

function checktasks() {
   let answer = confirm ("Have you completed your task?");
    if (answer) {
        alert("well done!");
    } else{
        alert("Try again!");
    }
}
 window.alert("Welcome to track your task page")
 window.confirm("Do you like this page")
   
function greetuser() {
    const name = document.getElementById("username").item
   if (name) {
     document.getElementById('greeting').innerText = "hello" + name + "!";
     document.getElementById("setup").style.display ='none';
     document.getElementById("main").style.display = 'block'
   }
}











