import axios from "axios";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { message } from "antd";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://63bd0c7afa38d30d85d7791e.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
        message.success("successfuly add data")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className="row mr-2">
          <div className="col-md-4">
            <div
              className={styles.form}
              style={{ width: "60vh", height: "65vh" }}
            >
              <div className="mb-2 mt-2">
                <Link to="/">
                  <button className="btn btn-primary">Data List</button>
                </Link>
              </div>
              <div className="p4 text-center">
                <h2>Create Data</h2>
              </div>
              <form onSubmit={handleSubmit} className="bg-dark">
                <div className="form-group">
                  <label>Enter Name: </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Enter Age: </label>
                  <input
                    type="number"
                    placeholder="Enter Age"
                    className="form-control"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>{" "}
                <div className="form-group">
                  <label>Enter Email: </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="d-grid">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
