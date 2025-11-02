/**
 * Utility for formatting dates in a consistent way
 * @namespace
 */
export const DateFormat = {
  /**
   * Formats a date string into a human-readable format
   * @param {string} dateStr - ISO date string to format
   * @returns {string} Formatted date string or error message
   */
  format(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return "Updated date unknown";

    return `Updated ${d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  },
};
