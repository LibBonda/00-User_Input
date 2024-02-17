//Method 1) accept user input with window prompt

/*let username = window.prompt("What's your name?");
console.log(username);  */

let userName;

document.getElementById("submitBtn").onclick = function () {
    userName = document.getElementById("userText").value;
    console.log(userName);
    document.getElementById("myLabel").innerText = "Hello!" + userName;
}
