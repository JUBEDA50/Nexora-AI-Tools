const KEY = "recent_tools";

export const addRecentlyViewed = (tool) => {
  let existing = JSON.parse(localStorage.getItem(KEY)) || [];

  existing = existing.filter((t) => t.id !== tool.id);
  existing.unshift(tool);

  if (existing.length > 5) existing = existing.slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(existing));
};

export const getRecentlyViewed = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};