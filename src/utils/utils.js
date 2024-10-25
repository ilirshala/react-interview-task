export const getBackgroundColor = (item, categories) => {
  if (categories?.includes("Scaffold") && item === "Scaffold") return "#EFD652";
  if (categories?.includes("Shoring") && item === "Shoring") return "#9640BE";
  return categories?.includes(item) && "#67AA3C";
};

export const removeCategory = (category, setCategories) => {
  setCategories((prev) => prev?.filter((cat) => cat !== category));
};
