import React, { useState } from "react";
import ActionButton from "../../action-button";
import { CheckOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddCategoryModal } from "../../../store/actions/modals.action";
import InputField from "../../input-field";
import { addCategory } from "../../../store/actions/categories.action";

const AddCategoryModal = () => {
  const dispatch = useDispatch();
  const { isAddCategoryModalOpen, categoryDetails } = useSelector(
    (state) => state.modals
  );

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({});

  const handleCloseModal = () => {
    dispatch(toggleAddCategoryModal());
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
      ...categoryDetails,
    };

    dispatch(addCategory(payload));
    message.success("Category added successfully!");

    setItem("");
    setQuantity(null);
    setDescription("");
    setNotes("");
    setErrors({});

    handleCloseModal();
  };

  return (
    <Modal
      open={isAddCategoryModalOpen}
      title="Add category"
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
        <InputField
          placeholder={"Item"}
          label={"Item"}
          value={item}
          onChange={(e) => setItem(e.target.value)}
          containerStyle={{ width: "50%" }}
          errors={errors.item}
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

export default AddCategoryModal;
