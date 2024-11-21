const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

const noButton2 = document.getElementById("no-btn2");
const yesButton2 = document.getElementById("yes-btn2");

noButton.addEventListener("click",()=> {
	popup2.style.display = "block";
	});
popup2.addEventListener("click", () => {
    popup2.style.display = "none";
});

// Hide the popup2 initially
popup2.style.display = "none";

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});
// Hide the popup initially
popup.style.display = "none";


noButton2.addEventListener("mouseover", () => {
    noButton2.style.position = "absolute";
    noButton2.style.left = Math.random() * 80 + "vw";
    noButton2.style.top = Math.random() * 80 + "vh";
});
yesButton2.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});
// Hide the popup initially
popup.style.display = "none";
