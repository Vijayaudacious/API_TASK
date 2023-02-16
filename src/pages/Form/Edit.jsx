import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { message } from "antd";

const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://63bd0c7afa38d30d85d7791e.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        message.success("Successfully Updated");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles.container}>
        <div className="row">
          <div className="col-md-4">
            <div
              className={styles.form}
              style={{ width: "46vh", height: "60vh" }}
            >
              <div className="mb-1 mt-2">
                <Link to="/">
                  <button className="btn">
                    <ArrowLeftOutlined /> Data List
                  </button>
                </Link>
              </div>
              <div className="p4 text-center">
                <h3>Update Data</h3>
                <hr />
              </div>
              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label>Name: </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email: </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Age: </label>
                  <input
                    type="number"
                    placeholder="Enter Age"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <br />
                <div className="grid text-center">
                  <input
                    type="submit"
                    value="Update"
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

export default Edit;
