import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { MultiSelect } from "primereact/multiselect";
import Multiselect from "multiselect-react-dropdown";

import {
  addBook,
  editBook,
  getBookDetails,
} from "../services/operations/bookApis";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddBook = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  console.log(selectedCities, "seleced");
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      // genre: "",
      price: "",
      language: "",
      totalPages: "",
      // city: selectedCities,
      genre: ""
    },
  });
  const submitHandler = async (data) => {
    console.log(data, "data");
    const { title, author, genre, language, totalPages, price } = data;

    dispatch(
      addBook(title, author, genre, language, totalPages, price, navigate)
    );
  };

  return (
    <div className="container mt-4 p-4">
      <form className="w-100" onSubmit={handleSubmit(submitHandler)}>
        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
          Add Book
        </h3>
        <div className="mb-1">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <div className="mb-1">
          <label>Author</label>
          <input
            className="form-control"
            type="text"
            {...register("author", { required: true })}
          />
          {errors.author && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        <div className="mb-1">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        {/* <div className="mb-1">
          <label>Genre</label>
          <input
            className="form-control"
            type="text"
            {...register("genre", {
              required: true,
            })}
          />
          {errors.genre && (
            <p className="text-danger">This field is required</p>
          )}
        </div> */}
        <div className="mb-1">
          <label>Language</label>
          <input
            className="form-control"
            type="text"
            {...register("language", { required: true })}
          />
          {errors.language && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <div>
          {/* <Select
            
            isMulti
            options={options}
            {...register("ash", { required: true })}
          />
          {errors.ash && <p className="text-danger">This field is required</p>} */}

          {/* <div className="card flex justify-content-center">
            <MultiSelect
            // {...register("city", { required: true })}
              value={selectedCities}
              name="city"
              onChange={(e) => setSelectedCities(e.target.value)}
              options={cities}
              optionLabel="name"
              placeholder="Select Cities"
              
              maxSelectedLabels={3}
              className="w-full md:w-20rem"
            />
          </div> */}


          {/* {errors.city && (
            <p className="text-danger">This field is required</p>
          )} */}

<label>Genre</label>
<Controller
          name="genre"
          control={control}
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => {
            console.log(" {console.log(field)}", field);
            return (
              <Multiselect
              className="form-control"
                {...field}
                inputRef={ref}
                displayValue="name"
                onSelect={(selected, item) => {
                  setValue("genre", selected);
                }}
                onRemove={(selected, item) => {
                  setValue("genre", selected);
                }}
                options={[
                  { value: "chocolate", name: "Chocolate", id: 1 },
                  { value: "strawberry", name: "Strawberry", id: 2 },
                  { value: "vanilla", name: "Vanilla", id: 3 }
                ]}
              />
            );
          }}
        />
         {errors.genre && (
            <p className="text-danger">This field is required</p>
          )}

        </div>
        <div className="mb-1">
          <label>Total Pages</label>
          <input
            className="form-control"
            type="number"
            {...register("totalPages", { required: true })}
          />
          {errors.totalPages && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        <button className="btn btn-info my-4 " type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
