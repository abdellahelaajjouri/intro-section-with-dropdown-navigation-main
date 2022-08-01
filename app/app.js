// this is for the mobile navbar

const header = document.querySelector(".navbar");
const mobilHeaderMarkUp = `

<div class="logo">
<img src="/helpers/images/logo.svg" alt="logo">
</div>
<div class="openMenuBtn">
<img src="/helpers/images/icon-menu.svg" alt="">
</div>
<div class="menu-expanded">
<div class="closeMenuBtn">
  <img src="/helpers/images/icon-close-menu.svg" alt="">
</div>
<div class="links">
  <div class="Features">
    <p class="dropdown">
      Features
      <img
        src="/helpers/images/icon-arrow-down.svg"
        alt="icon-arrow-down"
        class="icon-arrow-down"
      />
    </p>
    <ul class="list list1">
      <li> <img src="/helpers/images/icon-todo.svg" alt="icon-todo"> &nbsp; Todo List</li>
      <li> <img src="/helpers/images/icon-calendar.svg" alt="icon-calendar"> &nbsp; Calendar</li>
      <li> <img src="/helpers/images/icon-reminders.svg" alt="icon-reminders"> &nbsp; Reminders</li>
      <li> <img src="/helpers/images/icon-planning.svg" alt="icon-planning"> &nbsp; Planing</li>
    </ul>
  </div>
  <div class="company">
    <p class="dropdown">
      Company
      <img
        src="/helpers/images/icon-arrow-down.svg"
        alt="icon-arrow-down"
        class="icon-arrow-down"
      />
    </p>
    <ul class="list list2">
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  </div>
  <div class="Careers">
    <p>Careers</p>
  </div>
  <div class="About">
    <p>About</p>
  </div>
  </div>
  <div class="forms">
  <button>Login</button>
  <button class="register">Register</button>
  </div>
</div>

`;




const dropdown = document.getElementsByClassName("dropdown");
const imgs = document.getElementsByClassName("icon-arrow-down");

if (window.innerWidth <= 600) {
  header.innerHTML = mobilHeaderMarkUp;

  const mobilHero = document.querySelector(".hero img");
  const openMenu = document.querySelector(".openMenuBtn");
  const closeMenu = document.querySelector(".closeMenuBtn img");
  const menuExpanded = document.querySelector(".menu-expanded");
  const body = document.querySelector("body");
  const title = document.querySelector(".content h1");

  mobilHero.src = "/helpers/images/image-hero-mobile.png";
  title.innerHTML = "Make remote work";

  openMenu.addEventListener("click", function () {
    menuExpanded.style.display = "block";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", function () {
    menuExpanded.style.display = "none";
    body.style.height = "auto";
    body.style.overflow = "auto";
  });
}

window.onresize = function () {
  location.reload();
};

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    console.log("clicked");
    this.classList.toggle("active");
    console.log(dropdown[i]);
    const content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

    if (this.classList.contains("active")) {
      imgs[i].src = "/helpers/images/icon-arrow-up.svg";
    } else {
      imgs[i].src = "/helpers/images/icon-arrow-down.svg";
    }
  });
}
