/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSearch } from "./useSearch";
import { jobSitesTableColumns } from "../utils/tablesColumns";

export const useJobsiteTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobsites } = useSelector((state) => state.jobsites);
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredItems } = useSearch(searchQuery, jobsites);
  const columnsWithNavigation = jobSitesTableColumns.map((col) => {
    if (col.dataIndex === "jobsitename") {
      return {
        ...col,
        render: (text, record) => (
          <a onClick={() => navigate(`/${record.id}`)}>{text}</a>
        ),
      };
    }
    return col;
  });

  return {
    dispatch,
    jobsites,
    searchQuery,
    setSearchQuery,
    filteredItems,
    columnsWithNavigation,
  };
};
