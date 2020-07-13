let hour = new Date().getHours();
let image1 = document.createElement("img");
image1.setAttribute("src", "sunrise-Cuba.jpg");


let image2 = document.createElement("img");
image2.setAttribute("src", "afternoon.jpg");


let image3 = document.createElement("img");
image3.setAttribute("src", "evening.jpg");


let image4 = document.createElement("img");
image4.setAttribute("src", "night.jpg");




function ifElse() {
    if (hour >=4 && hour <=11) {
   document.getElementById("greeting").innerHTML = "Good Morning";
   document.body.style.backgroundColor = "yellow"
   document.body.appendChild(image1);
} else if (hour >=12 && hour <=17) {
    document.getElementById("greeting").innerHTML = "Good Afternoon";
    document.body.style.backgroundColor = "purple"
    document.body.appendChild(image2);
 } else if (hour >=18 && hour <=21) {
    document.getElementById("greeting").innerHTML = "Good Evening";
    document.body.style.backgroundColor = "orange"
    document.body.appendChild(image3);
 } else {
    document.getElementById("greeting").innerHTML = "Good Night";
    document.body.style.backgroundColor = "green"
    document.body.appendChild(image4);
 }
}
ifElse();