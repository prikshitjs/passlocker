let menubar = document.getElementById("menubar");
let addpass = document.querySelector(".addpass");

menubar.addEventListener("click", () => {
  addpass.classList.toggle("menuopen");
});

// get the values of form
let formdata = document.querySelector("form");

formdata.addEventListener("submit", (e) => {
  e.preventDefault();

  let sitename = e.target[0].value;
  let username = e.target[1].value;
  let password = e.target[2].value;
  let passdata = JSON.parse(localStorage.getItem("passwords")) ?? [];
  passdata.push({
    site_name: sitename,
    user_name: username,
    pass_word: password,
  });
  localStorage.setItem("passwords", JSON.stringify(passdata));
  display_passwords();
  formdata.reset();
});

let detailsbox = document.querySelectorAll(".detailsbox");
let usern = document.querySelector(".usern");
let userp = document.querySelector(".userp");
let s_name = document.querySelector(".s_name");

let details_info = document.querySelector(".details_info");
let show_s_name = document.querySelector(".show_s_name");
let show_usern = document.querySelector(".show_usern");
let show_userp = document.querySelector(".show_userp");
let details = document.querySelector(".details_cover");

detailsbox.forEach((element, i) => {
  element.addEventListener("click", () => {
    alert(i);
    show_s_name.innerHTML = s_name.innerHTML;
    show_usern.innerHTML = usern.innerHTML;
    show_userp.innerHTML = userp.innerHTML;

    details_info.classList.add("details_open");
  });
});

let close_details = document.getElementById("close_details");

close_details.addEventListener("click", () => {
  details_info.classList.remove("details_open");
});
let main = document.querySelector("main");

let display_passwords = () => {
  let passdata = JSON.parse(localStorage.getItem("passwords")) ?? [];
  let userdata = "";
  passdata.forEach((element, i) => {
    userdata += `<div class="detailsbox">
                    <h1 class="s_name">${element.site_name}</h1>
                    <span class="usern">${element.user_name}</span>
                    <span class="userp">${element.pass_word}</span>
                 </div>`;
  });
  main.innerHTML = userdata;
};
display_passwords();
