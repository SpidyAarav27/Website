document.getElementById("toggleContact").addEventListener("click", () => {
  const box = document.getElementById("contactBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
});
