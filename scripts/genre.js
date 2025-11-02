import { genres } from "./data.js";

// Helps convert genre IDs to their display names
export const Genre = {
  getNames(ids) {
    const result = [];
    for (const id of ids) {
      const genre = genres.find((g) => g.id === id);
      result.push(genre ? genre.title : "Unknown");
    }
    return result;
  },
};
