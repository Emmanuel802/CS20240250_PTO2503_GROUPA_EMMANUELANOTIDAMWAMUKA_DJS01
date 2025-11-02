import { createGrid } from "./grid.js";
import { createModal } from "./modal.js";
import { podcasts } from "./data.js";

function startApp() {
  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", function () {
    createModal.close();
  });

  // Renders grid
  const grid = createGrid();
  grid.render(podcasts);
}

startApp();
