import { Flex } from "antd";
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/categories.action";
import CategoryModal from "../../components/modals/category-modal";
import Sidebar from "../../components/jobsite-detail-components/sidebar";
import CategoriesTable from "../../components/jobsite-detail-components/categories-table";

const JobsiteDetail = () => {
  const dispatch = useDispatch();
  const { jobsiteId } = useParams();
  const { jobsites } = useSelector((state) => state.jobsites);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedJobsite = useMemo(() => {
    return jobsites?.find((jobsite) => jobsite?.id === jobsiteId);
  }, [jobsites, jobsiteId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    dispatch(getCategories(jobsiteId));
  }, [dispatch, jobsiteId]);

  return (
    <>
      <CategoryModal />
      <Flex gap={"middle"} style={{ padding: "15px" }}>
        <Sidebar
          handleCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
          selectedJobsite={selectedJobsite}
        />
        <CategoriesTable selectedCategory={selectedCategory} />
      </Flex>
    </>
  );
};

export default JobsiteDetail;
