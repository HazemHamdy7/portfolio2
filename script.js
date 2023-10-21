let menuItem = decument.querySelector("#menu=icon");
let navbar = decument.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = decument.querySelectorAll("section");
let navlinks = decument.querySelectorAll("header nav a");

Window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scroll;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        decument
          .querySelector("header nav a[href*=' + id + ']")
          .classList.add("active");
      });

      let header = decument.querySelector("header");
      header.classList.toggle("sticky", Window.scrollY > 100);
    }
  });
};
