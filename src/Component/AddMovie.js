import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useHistory } from "react-router-dom";

const AddMovie = ({ handleAdd }) => {
  const history = useHistory();
  const [form, setForm] = useState({
    Moviename: "",
    Date: "",
    Imgsrc: "",
    Rating: 1,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let film = { ...form, id: Math.random() };
    handleAdd(film);
    setForm({
      Moviename: "",
      Date: "",
      Imgsrc: "",
      Rating: 1,
    });
    history.push("/");
  };
  const handelRate = (rate) => {
    setForm({ ...form, Rating: rate });
  };
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>Movie Name</label>
        <input
          type="text"
          value={form.Moviename}
          name="Moviename"
          onChange={handleChange}
        />
        <label>Imgsrc</label>
        <input
          type="url"
          value={form.Imgsrc}
          name="Imgsrc"
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          type="date"
          value={form.Date}
          name="Date"
          onChange={handleChange}
        />
        <label>Rate</label>
        <ReactStars Rate={form.Rating} handelRate={handelRate} />
        <button className="btn btn-primary">Add</button>
        <Link to="/">
          <button className="btn btn-danger">cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddMovie;
