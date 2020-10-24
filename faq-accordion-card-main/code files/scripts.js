function toggleStates(id) {
   var element = document.getElementById(id);
   var hasSelectedClass = element.classList.contains("selected");
   if(hasSelectedClass) {
        element.classList.remove("selected");
        element.querySelector(".question").style.color="#4a4b5e";
        element.querySelector(".question").style.fontWeight="400";
        element.querySelector(".arrow").style.transform="rotate(0deg)";
        element.nextElementSibling.style.display="none";
   } else {
        element.classList.add("selected");
        element.querySelector(".question").style.color="#1d1e35";
        element.querySelector(".question").style.fontWeight="700";
        element.querySelector(".arrow").style.transform="rotate(180deg)";
        element.nextElementSibling.style.display="block";
    }
}