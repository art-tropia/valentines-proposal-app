let yesBtn = document.querySelector("#yesBtn");
let noBtn = document.querySelector("#noBtn");
let mainmessage = document.querySelector(".msg");

yesBtn.addEventListener("click", function () {
    mainmessage.textContent = "yay! i knew it";
});

noBtn.addEventListener("click", function () {
    mainmessage.textContent = "its okay i appreciate the honesty!";
});


