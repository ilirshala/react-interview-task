import { useCallback, useEffect, useState } from "react";

export const useCategoryModal = (category) => {
  const [formState, setFormState] = useState({
    item: "",
    quantity: "",
    description: "",
    notes: "",
    errors: {},
  });

  useEffect(() => {
    if (category) {
      setFormState({
        item: category.item || "",
        quantity: category.quantity || "",
        description: category.description || "",
        notes: category.notes || "",
        errors: {},
      });
    } else {
      resetForm();
    }
  }, [category]);

  const resetForm = useCallback(() => {
    setFormState({
      item: "",
      quantity: "",
      description: "",
      notes: "",
      errors: {},
    });
  }, []);

  const updateField = useCallback((field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
      errors: { ...prevState.errors, [field]: "" },
    }));
  }, []);

  return { formState, updateField, resetForm, setFormState };
};
