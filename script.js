let educationbtn = document.querySelector(".education-btn");
let experiencebtn = document.querySelector(".experience-btn");
let skillsbtn = document.querySelector(".skills-btn");

let educationul = document.querySelectorAll(".edu");
let experienceul = document.querySelectorAll(".exp");
let skillsul = document.querySelectorAll(".prog");
educationul[0].style.display = "none";
experienceul[0].style.display = "none";
experienceul[1].style.display = "none";
experienceul[2].style.display = "none";
skillsul[0].style.display = "none";
skillsul[1].style.display = "none";
skillsul[2].style.display = "none";
skillsul[3].style.display = "none";
skillsul[4].style.display = "none";
skillsul[5].style.display = "none";
skillsul[6].style.display = "none";

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
