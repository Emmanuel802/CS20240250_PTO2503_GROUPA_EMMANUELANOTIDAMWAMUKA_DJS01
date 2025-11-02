import { Genre } from "./genre.js";
import { DateFormat } from "./dateFormat.js";
import { seasons } from "./data.js";

/**
 * Modal component for displaying detailed podcast information
 * @module modal
 * @property {Function} open - Opens the modal with podcast details
 * @property {Function} close - Closes the modal
 */
export const createModal = (() => {
  // Get all the elements we need
  const modal = document.getElementById("modal");
  const elements = {
    title: document.getElementById("modal-title"),
    image: document.getElementById("modal-banner-image"),
    description: document.getElementById("modal-description"),
    genres: document.getElementById("modal-genres"),
    updated: document.getElementById("modal-updated-text"),
    seasons: document.getElementById("seasons-list"),
  };

  /**
   * Updates the modal content with podcast information
   * @param {Object} podcast - The podcast data to display
   * @private
   */
  function updateContent(podcast) {
    if (!podcast) return;

    // Set basic info
    elements.image.src = podcast.image;
    elements.title.textContent = podcast.title;
    elements.description.textContent = podcast.description;
    elements.updated.textContent = DateFormat.format(podcast.updated);

    // Clear and add genre tags
    elements.genres.innerHTML = "";
    const genreNames = Genre.getNames(podcast.genres);
    for (const name of genreNames) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = name;
      elements.genres.appendChild(tag);
    }

    // Clear and add season info
    elements.seasons.innerHTML = "";
    const podcastSeasons = seasons.find((s) => s.id === podcast.id);

    if (podcastSeasons && podcastSeasons.seasonDetails) {
      for (const season of podcastSeasons.seasonDetails) {
        const item = document.createElement("li");
        item.className = "season-item";
        item.innerHTML = `
          <strong class="season-title">${season.title}</strong>
          <span class="episodes">${season.episodes} episodes</span>
        `;
        elements.seasons.appendChild(item);
      }
    } else {
      const item = document.createElement("li");
      item.textContent = "No seasons available";
      elements.seasons.appendChild(item);
    }
  }

  // Handle keyboard events
  function handleKeydown(e) {
    if (e.key === "Escape") {
      createModal.close();
    }
  }

  // Add keyboard support
  document.addEventListener("keydown", handleKeydown);

  return {
    open(podcast) {
      updateContent(podcast);
      modal.classList.remove("hidden");
      // Focus close button for accessibility
      const closeBtn = document.getElementById("close-btn");
      if (closeBtn) closeBtn.focus();
    },

    close() {
      modal.classList.add("hidden");
    },
  };
})();
