document.addEventListener("DOMContentLoaded", () => {
    const recipeCards = document.querySelectorAll(".recipe-card img");
  
    recipeCards.forEach((img) => {
      img.addEventListener("load", () => {
        img.style.borderRadius = "50%";
      });
    });
  });
  