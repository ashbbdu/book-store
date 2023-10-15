import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editBook, getBookDetails } from "../services/operations/bookApis";

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookDetails } = useSelector((state) => state.book);
  console.log(bookDetails, "bookDetailsasdfasf");
  const ash = useParams()
  console.log(ash, "ash");

  useEffect(() => {
    dispatch(getBookDetails(id))
  } ,[])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      language: "",
      totalPages: "",
    },
  });


  const submitHandler = async (data) => {
    const { title, author, genre, language, totalPages } = data;
    dispatch(editBook(title, author, genre, language, totalPages, navigate));
  };

  return (
    <div className="container p-4">
      <form className="w-100" onSubmit={handleSubmit(submitHandler)}>
        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
          {id ? "Update Book" : " Add Book"}
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
        </div>
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
        <div className="mb-1">
          <label>Total Pages</label>
          <input
            className="form-control"
            type="text"
            {...register("totalPages", { required: true })}
          />
          {errors.totalPages && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <div>
          <lable>Cover</lable>
          <input type="file" className="form-control" />
        </div>

        <button className="btn btn-info my-4 " type="submit">
          {id ? "Update Book" : " Add Book"}
        </button>
      </form>
    </div>
  );
};

export default EditBook;
