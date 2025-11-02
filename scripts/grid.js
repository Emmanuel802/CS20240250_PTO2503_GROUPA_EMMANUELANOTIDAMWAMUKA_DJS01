import { createPodcastCard } from "./podcastCard.js";
import { createModal } from "./modal.js";

// Creates and manages the grid of podcast cards
export const createGrid = () => {
  const container = document.getElementById("podcast-grid");

  // Make sure we found the grid container
  if (!container) {
    console.error("Couldn't find the podcast grid container!");
    return { render: () => {} };
  }

  return {
    render(podcasts) {
      // Clear existing cards
      container.innerHTML = "";

      // No podcasts? Show a message
      if (!podcasts || podcasts.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "No podcasts to display";
        container.appendChild(msg);
        return;
      }

      // Create and add each podcast card
      for (const podcast of podcasts) {
        const card = createPodcastCard(podcast, createModal.open);
        container.appendChild(card);
      }
    },
  };
};
