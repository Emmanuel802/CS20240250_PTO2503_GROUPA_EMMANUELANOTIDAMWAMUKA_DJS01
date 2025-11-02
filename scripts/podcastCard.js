import { Genre } from "./genre.js";
import { DateFormat } from "./dateFormat.js";

/**
 * Creates a podcast card element with all podcast information
 * @param {Object} podcast - The podcast data object
 * @param {string} podcast.id - Unique identifier for the podcast
 * @param {string} podcast.title - Title of the podcast
 * @param {string} podcast.image - URL of the podcast cover image
 * @param {number} podcast.seasons - Number of seasons
 * @param {Array<number>} podcast.genres - Array of genre IDs
 * @param {string} podcast.updated - Last update date string
 * @param {Function} onClick - Callback function when card is clicked
 * @returns {HTMLElement} The created card element
 */
export const createPodcastCard = (podcast, onClick) => {
  // Create main card container
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", podcast.id);

  // Add cover image
  const img = document.createElement("img");
  img.src = podcast.image;
  img.alt = `${podcast.title} cover`;
  card.appendChild(img);

  // Add title
  const title = document.createElement("h3");
  title.textContent = podcast.title;
  card.appendChild(title);

  // Add seasons count
  const seasons = document.createElement("p");
  seasons.textContent = `${podcast.seasons} season${
    podcast.seasons > 1 ? "s" : ""
  }`;
  card.appendChild(seasons);

  // Add genre tags
  const tagsDiv = document.createElement("div");
  tagsDiv.className = "tags";
  const genreNames = Genre.getNames(podcast.genres);
  for (const name of genreNames) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = name;
    tagsDiv.appendChild(tag);
  }
  card.appendChild(tagsDiv);

  // Add update date
  const updated = document.createElement("p");
  updated.className = "updated-text";
  updated.textContent = DateFormat.format(podcast.updated);
  card.appendChild(updated);

  // Make card clickable
  card.addEventListener("click", () => onClick(podcast));

  return card;
};
