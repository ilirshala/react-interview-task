import { useState } from "react";

export const useJobsiteFormModal = () => {
  const [jobsiteName, setJobsiteName] = useState("");
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!jobsiteName.trim()) newErrors.jobsiteName = "Jobsite name is required";
    if (categories.length === 0)
      newErrors.categories = "At least one category is required";
    if (!status || !status.key) newErrors.status = "Status is required";
    return newErrors;
  };

  const resetForm = () => {
    setJobsiteName("");
    setCategories([]);
    setStatus("");
    setErrors({});
  };

  return {
    jobsiteName,
    setJobsiteName,
    categories,
    setCategories,
    status,
    setStatus,
    errors,
    setErrors,
    validateInputs,
    resetForm,
  };
};
