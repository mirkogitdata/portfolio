const loader = document.getElementById("loader");
const afterload = document.getElementById("afterLoad");
window.addEventListener("load", function(){
  afterload.style.display = "none";
  loader.style.display = "none";
});
