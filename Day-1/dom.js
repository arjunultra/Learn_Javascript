const title = document.getElementById("title");
title.style.backgroundColor = "dodgerblue";
const btnPrimary = document.getElementById("btn-primary");
btnPrimary.addEventListener("toggle", function () {
  title.classList.add("btn-toggle");
});
