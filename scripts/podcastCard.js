import { Genre } from "./genre.js";
import { DateFormat } from "./dateFormat.js";

// Creates a card element for a single podcast
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
