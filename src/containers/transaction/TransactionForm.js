import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTransaction, CATEGORIES } from "./transactionsSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
import { uploadFile } from "../../storage";
import { selectUserId } from "../usersSlice";

const TransactionForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  const handleAddingTransaction = async (data) => {
    try {
      const bucket = await uploadFile(data.file.item(0), userId);
      dispatch(
        addNewTransaction({
          category: data.category,
          date: data.date,
          amount: Number(data.amount),
          description: data.description,
          file: bucket,
          id: uuidv4(),
        })
      );
      toast("yay");
      handleClose();
      navigate("/transactions");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadReceipt = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <div className="new-transaction-container">
      <form
        className="transaction-form"
        onSubmit={handleSubmit(handleAddingTransaction)}
      >
        <h2
          style={{
            height: 40,
            width: 600,
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          Transaction details
        </h2>

        <div className="transaction-text-container">
          <div className="container">
            <label htmlFor="category">CATEGORY</label>
            <select
              name="category"
              style={{ padding: 5 }}
              id="category"
              {...register("category", {
                required: {
                  value: true,
                  message: "Select a category",
                },
              })}
            >
              <option value="">Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="container">
            <label htmlFor="date">DATE</label>
            <input
              name="date"
              type="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Select a date",
                },
              })}
            />
          </div>

          <div className="container">
            <label htmlFor="amount">AMOUNT</label>
            <input
              type="number"
              name="amount"
              placeholder="0"
              id="amount"
              className="m-2"
              {...register("amount", {
                min: { value: 1, message: "Amount should be higher than 1" },
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Amount is required and must contain a number",
                },
              })}
            />
          </div>

          <div className="container">
            <label htmlFor="description">DESCRIPTION</label>
            <input
              name="description"
              id="description"
              placeholder="Description"
              className="m-2"
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
            />
          </div>
          <div className="container">
            <input
              type="file"
              name="file"
              onChange={handleUploadReceipt}
              {...register("file", {
                required: {
                  value: true,
                  message: "Upload your receipt",
                },
              })}
            />
          </div>
        </div>

        <ErrorMessage
          errors={errors}
          name="category"
          render={({ message }) => <p>{message}</p>}
        />
        <ErrorMessage
          errors={errors}
          name="date"
          render={({ message }) => <p>{message}</p>}
        />
        <ErrorMessage
          errors={errors}
          name="amount"
          render={({ message }) => <p>{message}</p>}
        />
        <ErrorMessage
          errors={errors}
          name="description"
          render={({ message }) => <p>{message}</p>}
        />

        <input type="submit" className="add-transaction-button" />
      </form>
    </div>
  );
};
export default TransactionForm;
