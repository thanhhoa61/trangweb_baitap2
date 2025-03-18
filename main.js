
let element = document.getElementById("demo");
console.log(element.textContent);

element.textContent = "JavaScript DOM";

let link = document.querySelector("a[href='https://topdev.vn/']");
link.setAttribute("href", "http://iuh.edu.vn");

let img = document.getElementById("img-dom");
img.setAttribute("src", "./hinh/dom2.jpg");

let paragraph = document.querySelectorAll(".text");
paragraph.forEach(p => {
    p.style.backgroundColor = "yellow";
    p.style.color = "red";
    p.style.fontSize = "20px";
    p.style.padding = "10px";
});

let title = document.getElementById("tieude1");
title.classList.add("td1-nd");

let newDiv = document.createElement("div");
newDiv.className = "tieude2";
newDiv.textContent = "Hình ảnh DOM";
document.getElementById("new").appendChild(newDiv);

let elementToRemove = document.getElementById("canxoa");
elementToRemove.parentNode.removeChild(elementToRemove);

let oldElement = document.getElementById("canthay");
let newElement = document.createElement("p");
newElement.className = "tieude2";
newElement.textContent = "Tham khảo tại";
oldElement.parentNode.replaceChild(newElement, oldElement);

function functionCong() {
    let num1 = parseInt(document.getElementById("so1").value);
    let num2 = parseInt(document.getElementById("so2").value);
    document.getElementById("ketqua").textContent = num1 + num2;
}

document.getElementById("btn").addEventListener("click", function() {
    this.textContent = "Clicked!";
    this.style.fontSize = "20px";
});

function showUser() {
    let users = document.querySelectorAll(".user");
    users.forEach(user => {
        user.classList.toggle("hide");
    });
}