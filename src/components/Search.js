import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllBooks } from "../services/operations/bookApis";
import {AiOutlineSearch} from "react-icons/ai"

const Search = () => {
    const [searchText , setSearchText] = useState("")
  const dispatch = useDispatch();
  const handleSearch = (e) => {
   setSearchText(e.target.value);
  };
  return (
    <div className="search-box d-flex">
      <input
        type="text"
        className="form-control w-30"
        placeholder="Search Book"
        onChange={(e) => handleSearch(e)}
      />
      <button onClick={() => dispatch(getAllBooks(searchText))} className="btn btn-info mx-2"><AiOutlineSearch /></button>
    </div>
  );
};

export default Search;
