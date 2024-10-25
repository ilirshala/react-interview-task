import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useSearch } from "./useSearch";

export const useCategoriesTable = (selectedCategory) => {
  const { jobsiteId } = useParams();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { categories } = useSelector((state) => state.categories);

  const filterCategoriesByCategory = useMemo(() => {
    return categories?.filter(
      (category) => category?.category === selectedCategory
    );
  }, [categories, selectedCategory]);

  const { filteredItems } = useSearch(
    searchQuery,
    filterCategoriesByCategory || []
  );

  return {
    jobsiteId,
    dispatch,
    setSearchQuery,
    filteredItems,
    searchQuery,
  };
};
