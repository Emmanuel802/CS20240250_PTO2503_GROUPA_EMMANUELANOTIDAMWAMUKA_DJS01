import { createPodcastCard } from "./podcastCard.js";
import { createModal } from "./modal.js";

/**
 * Creates and manages the podcast grid component
 * @module grid
 * @returns {Object} Grid controller with render method
 * @property {Function} render - Renders podcast cards into the grid
 */
export const createGrid = () => {
  const container = document.getElementById("podcast-grid");

  // Make sure we found the grid container
  if (!container) {
    console.error("Couldn't find the podcast grid container!");
    return { render: () => {} };
  }

  return {
    /**
     * Renders the podcast grid with provided podcast data
     * @param {Array<Object>} podcasts - Array of podcast objects to display
     */
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
