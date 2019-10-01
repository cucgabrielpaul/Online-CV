let educationbtn = document.querySelector(".education-btn");
let experiencebtn = document.querySelector(".experience-btn");
let skillsbtn = document.querySelector(".skills-btn");

let educationul = document.querySelectorAll(".edu");
let experienceul = document.querySelectorAll(".exp");
let skillsul = document.querySelectorAll(".prog");

let ev = data => {
  for (i = 0; i < data.length; i++) {
    if (data[i].style.display !== "none") {
      data[i].style.display = "none";
    } else {
      data[i].style.display = "block";
    }
  }
};

educationbtn.addEventListener("click", () => {
  ev(educationul);
});
experiencebtn.addEventListener("click", () => {
  ev(experienceul);
});
skillsbtn.addEventListener("click", () => {
  ev(skillsul);
});
