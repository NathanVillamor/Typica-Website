const taytayBranch = document.querySelector(".Taytay");
const angonoBranch = document.querySelector(".Angono");
const AntipoloBranch = document.querySelector(".Antipolo");
const branchImage = document.querySelector(".branch-img");

taytayBranch.onclick = function() {
    branchImage.style.background = "url(/Assets/TaytayBranch.jpg)";
    branchImage.style.backgroundSize = "contain";
    branchImage.style.backgroundPosition = "center";
    branchImage.style.transition = "1s ease";
}

angonoBranch.onclick = function() {
    branchImage.style.background = "url(/Assets/AngonoBranch.jpg)";
    branchImage.style.backgroundSize = "contain";
    branchImage.style.backgroundPosition = "center";
    branchImage.style.transition = "1s ease";
}

AntipoloBranch.onclick = function() {
    branchImage.style.background = "url(/Assets/AntipoloBranch.jpg)";
    branchImage.style.backgroundSize = "contain";
    branchImage.style.backgroundPosition = "center";
    branchImage.style.transition = "1s ease";
}