import { useEffect, useState } from "react";

export const useSearch = (searchQuery, items) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    if (searchQuery === "") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => {
        const jobsiteNameMatch = item?.jobsitename
          ?.toLowerCase()
          .includes(lowerCaseQuery);
        const itemMatch = item?.item?.toLowerCase().includes(lowerCaseQuery);
        return jobsiteNameMatch || itemMatch;
      });
      setFilteredItems(filtered);
    }
  }, [searchQuery, items]);
  return {
    filteredItems,
  };
};
