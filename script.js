let educationbtn = document.querySelector(".education-btn");
let experiencebtn = document.querySelector(".experience-btn");
let skillsbtn = document.querySelector(".skills-btn");

let educationul = document.querySelectorAll(".edu");
let experienceul = document.querySelectorAll(".exp");
let skillsul = document.querySelectorAll(".skills");

for (x = 0; x < educationul.length; x++) {
  educationul[x].style.display = "none";
}

for (y = 0; y < experienceul.length; y++) {
  experienceul[y].style.display = "none";
}

for (z = 0; z < skillsul.length; z++) {
  skillsul[z].style.display = "none";
}

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
