import React, { useEffect } from "react";
import { useForm , Controller} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editBook, getBookDetails } from "../services/operations/bookApis";
import Multiselect from "multiselect-react-dropdown";

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookDetails } = useSelector((state) => state.book);
  console.log(bookDetails ,"bookdetails")
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title:"",
      author: "",
      genre:"",
      language: "",
      totalPages: "",
      price : ""
    },
  });

  useEffect(() => {
    setValue("title" , bookDetails?.title)
    setValue("author" , bookDetails.author)
    setValue("genre" , bookDetails?.genre)
    setValue("language" , bookDetails.language)
    setValue("totalPages" , bookDetails.totalPages)
    setValue("price" , bookDetails.price)
  } ,[[register]])

  useEffect(() => {
   
    dispatch(getBookDetails(id));
  },[] );


  const submitHandler = async (data) => {
    const { title, author, genre, language, totalPages ,price } = data;
    dispatch(editBook(title, author, genre, language, totalPages ,price , id, navigate));
  };

  return (
    <div className="container mt-4 p-4">
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
                selectedValues={bookDetails.genre}
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
            type="number"
            {...register("totalPages", { required: true })}
          />
          {errors.totalPages && (
            <p className="text-danger">This field is required</p>
          )}
        </div>

        <button className="btn btn-info my-4 " type="submit">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
