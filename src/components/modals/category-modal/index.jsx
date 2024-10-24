import React, { useCallback, useMemo } from "react";
import ActionButton from "../../action-button";
import { CheckOutlined } from "@ant-design/icons";
import { Flex, Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryModal } from "../../../store/actions/modals.action";
import InputField from "../../input-field";
import {
  addCategory,
  updateCategory,
} from "../../../store/actions/categories.action";
import SearchSelect from "../../search-select";
import { useCategoryModal } from "../../../hooks/useCategoryModal";

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { isCategoryModalOpen, serviceDetails, isEditCategory, category } =
    useSelector((state) => state.modals);

  const { formState, updateField, resetForm, setFormState } = useCategoryModal(
    category,
    serviceDetails
  );

  const { item, quantity, description, notes, errors } = formState;

  const handleCloseModal = useCallback(() => {
    dispatch(toggleCategoryModal());
    resetForm();
  }, [dispatch, resetForm]);

  const validateInputs = useCallback(() => {
    const newErrors = {};
    if (!item.trim()) newErrors.item = "Item is required";
    if (!quantity || isNaN(quantity) || quantity <= 0)
      newErrors.quantity = "Valid quantity is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!notes.trim()) newErrors.notes = "Notes are required";

    return newErrors;
  }, [item, quantity, description, notes]);

  const handleSubmit = useCallback(() => {
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      setFormState((prevState) => ({ ...prevState, errors: validationErrors }));
      message.error("Please correct the errors before submitting.");
      return;
    }

    const payload = {
      item,
      quantity: parseInt(quantity),
      description,
      notes,
      category: serviceDetails?.category || category?.category,
      jobsiteId: serviceDetails?.jobsiteId || category?.jobsiteId,
    };

    if (category && category.id) {
      dispatch(updateCategory(category.id, payload));
      message.success("Category updated successfully!");
    } else {
      dispatch(addCategory(payload));
      message.success("Category added successfully!");
    }

    handleCloseModal();
  }, [
    validateInputs,
    item,
    quantity,
    description,
    notes,
    serviceDetails?.category,
    serviceDetails?.jobsiteId,
    category,
    handleCloseModal,
    setFormState,
    dispatch,
  ]);
  const itemOptions = useMemo(
    () => [
      { label: "G42295", value: "G42295" },
      { label: "M721", value: "M721" },
      { label: "M94796", value: "M94796" },
      { label: "S25907", value: "S25907" },
      { label: "A68446", value: "A68446" },
      { label: "F3786", value: "F3786" },
      { label: "R69895", value: "R69895" },
      { label: "A29259", value: "A29259" },
      { label: "A41878", value: "A41878" },
      { label: "A37244", value: "A37244" },
      { label: "M89319", value: "M89319" },
    ],
    []
  );

  return (
    <Modal
      open={isCategoryModalOpen}
      title={isEditCategory ? "Edit category" : "Add category"}
      onCancel={handleCloseModal}
      footer={
        <div className="modal-footer">
          <ActionButton
            type="primary"
            primaryText="Save Changes"
            primaryIcon={<CheckOutlined />}
            onClickPrimary={handleSubmit}
          />
        </div>
      }
    >
      <Flex gap={"middle"}>
        <SearchSelect
          label="Item"
          value={item}
          onChange={(value) => updateField("item", value)}
          options={itemOptions}
          containerStyle={{ width: "50%" }}
          style={{ width: "100%" }}
          errors={errors.item}
        />
        <InputField
          placeholder="Quantity"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => updateField("quantity", e)}
          containerStyle={{ width: "50%" }}
          style={{ width: "100%" }}
          errors={errors.quantity}
        />
      </Flex>

      <InputField
        placeholder="Description"
        label="Description"
        value={description}
        onChange={(e) => updateField("description", e.target.value)}
        type="textarea"
        errors={errors.description}
      />

      <InputField
        placeholder="Notes"
        label="Notes"
        value={notes}
        onChange={(e) => updateField("notes", e.target.value)}
        type="textarea"
        errors={errors.notes}
      />
    </Modal>
  );
};

export default CategoryModal;
