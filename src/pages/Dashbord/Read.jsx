import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  PoweroffOutlined,
  ExclamationCircleFilled,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";

const { confirm } = Modal;
const Read = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://63bd0c7afa38d30d85d7791e.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://63bd0c7afa38d30d85d7791e.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setDataStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }

  const logout = async () => {
    await Cookies.remove("token");
    navigate("/login");
  };

  return (
    <>
      <div className={styles.header}>
        <img
          src="https://assets.website-files.com/5ff66329429d880392f6cba2/61c323afb777801522775611_CRUD%20%20Preview.png"
          alt="Logo"
          style={{ marginRight: "38rem", width: "8rem" }}
        />
        <Link to="/create">
          <Button
            type="primary"
            style={{ margin: "1rem", left: "17rem" }}
            ghost
          >
            Add Data
          </Button>
        </Link>
        <Button
          danger
          icon={<PoweroffOutlined />}
          onClick={() => logout()}
          style={{ margin: "1rem 11rem", left: "6rem" }}
        >
          Logout
        </Button>
      </div>
      <div className="row mt-5">
        <div className="col-md-2 col-sm-1"></div>
        <div className="col-md-8 col-sm-10 mt-5">
          <table className="table table-bordered table-striped table-light table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Action</th>
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      {item.e_name.charAt(0).toUpperCase() +
                        item.e_name.slice(1)}
                    </td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                      <Link to="/edit">
                        <Tooltip title="Edit">
                          <Button
                            icon={<EditOutlined />}
                            className={styles.editBtn}
                            onClick={() =>
                              setDataStorage(
                                item.id,
                                item.e_name,
                                item.e_age,
                                item.e_email
                              )
                            }
                          ></Button>
                        </Tooltip>
                      </Link>

                      <Tooltip title="Delete">
                        <Button
                          danger
                          icon={
                            <DeleteOutlined />
                          }
                          // className="btn"
                          onClick={() => {
                            confirm({
                              title: "Are You Sure To Delete Data ??",
                              icon: <ExclamationCircleFilled />,
                              onOk() {
                                return new Promise((resolve, reject) => {
                                  handleDelete(item.id);
                                  setTimeout(
                                    Math.random() > 0.5 ? resolve : reject,
                                    1000
                                  );
                                }).catch(() => console.log("Oops errors!"));
                              },
                              onCancel() {},
                            });
                          }}
                        ></Button>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-2 col-sm-1"></div>
      </div>
    </>
  );
};

export default Read;
