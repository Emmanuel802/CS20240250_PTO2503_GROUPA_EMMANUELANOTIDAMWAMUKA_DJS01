import { genres } from "./data.js";

/**
 * Utility for handling podcast genre operations
 * @namespace
 */
export const Genre = {
  /**
   * Converts genre IDs to their display names
   * @param {Array<number>} ids - Array of genre IDs
   * @returns {Array<string>} Array of genre names
   */
  getNames(ids) {
    const result = [];
    for (const id of ids) {
      const genre = genres.find((g) => g.id === id);
      result.push(genre ? genre.title : "Unknown");
    }
    return result;
  },
};
