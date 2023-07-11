//Top bar
const openTopbar = document.querySelector(".open-icon");
const topbar = document.querySelector(".section-topbar");
const active = document.querySelector(".active");
const closeTopbar = document.querySelector(".close-icon");
let navClose = document.querySelectorAll(".nav-close");

//open mobile bar
openTopbar.addEventListener("click", function () {
  topbar.classList.toggle("active");
});

// close mobile bar
closeTopbar.addEventListener("click", function () {
  topbar.classList.remove("active");
});

// close mobile menu when click a herf using for loop
for (let i = 0; i < navClose.length; i++) {
  navClose[i].addEventListener("click", function () {
    topbar.classList.remove("active");
  });
}

console.log("test");
