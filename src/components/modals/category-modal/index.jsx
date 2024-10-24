import React, { useState, useEffect } from "react";
import ActionButton from "../../action-button";
import { CheckOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryModal } from "../../../store/actions/modals.action";
import InputField from "../../input-field";
import { addCategory } from "../../../store/actions/categories.action";
import SearchSelect from "../../search-select";

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { isCategoryModalOpen, serviceDetails, isEditCategory, category } =
    useSelector((state) => state.modals);

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (category) {
      setItem(category.item || "");
      setQuantity(category.quantity || null);
      setDescription(category.description || "");
      setNotes(category.notes || "");
    } else {
      setItem(null);
      setQuantity(null);
      setDescription("");
      setNotes("");
    }
  }, [category]);

  const handleCloseModal = () => {
    dispatch(toggleCategoryModal());
  };

  const validateInputs = () => {
    const newErrors = {};

    if (!item.trim()) newErrors.item = "Item is required";
    if (!quantity || isNaN(quantity) || quantity <= 0)
      newErrors.quantity = "Valid quantity is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!notes.trim()) newErrors.notes = "Notes are required";

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      message.error("Please correct the errors before submitting.");
      return;
    }

    const payload = {
      item,
      quantity: parseInt(quantity),
      description,
      notes,
      category: serviceDetails?.category,
      jobsiteId: serviceDetails?.jobsiteId,
    };

    if (category && category.id) {
      //  dispatch(updateCategory(categoryDetails.id, payload));
      message.success("Category updated successfully!");
    } else {
      dispatch(addCategory(payload));
      message.success("Category added successfully!");
    }

    // Reset form fields
    setItem("");
    setQuantity(null);
    setDescription("");
    setNotes("");
    setErrors({});

    handleCloseModal();
  };

  return (
    <Modal
      open={isCategoryModalOpen}
      title={isEditCategory ? "Edit category" : "Add category"}
      onCancel={handleCloseModal}
      footer={[
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "70px",
          }}
        >
          <ActionButton
            type="primary"
            primaryText={"Save Changes"}
            primaryIcon={<CheckOutlined className="icon" />}
            onClickPrimary={handleSubmit}
          />
        </div>,
      ]}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <SearchSelect
          label={"Item"}
          value={item}
          onChange={(e) => setItem(e)}
          containerStyle={{ width: "50%" }}
          style={{ width: "100%" }}
          errors={errors.item}
          options={[
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
          ]}
        />

        <InputField
          placeholder={"Quantity"}
          label={"Quantity"}
          type="number"
          value={quantity}
          onChange={(value) => setQuantity(value)}
          style={{ width: "100%" }}
          containerStyle={{ width: "50%" }}
          errors={errors.quantity}
        />
      </div>

      <InputField
        placeholder={"Description"}
        label={"Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        containerStyle={{ width: "100%", marginTop: "10px" }}
        type="textarea"
        errors={errors.description}
      />

      <InputField
        placeholder={"Notes"}
        label={"Notes"}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        containerStyle={{ width: "100%", marginTop: "10px" }}
        type="textarea"
        errors={errors.notes}
      />
    </Modal>
  );
};

export default CategoryModal;
