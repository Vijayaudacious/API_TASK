import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Card } from "antd";
import styles from "./styles.module.css";
import { Button } from "antd";
import SingleCard from "../singleCard/index";
import { PoweroffOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const { Meta } = Card;
const Cards = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [card, setCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getCards();
  }, []);
  const getCards = async () => {
    try {
      const { data } = await axios.get(`https://reqres.in/api/users`);
      setCard(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const showModal = (data) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const logout = async () => {
    await Cookies.remove("token");
    navigate("/login");
  };
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.name}>VIJAY SITE</p>
        <Button
          danger
          icon={<PoweroffOutlined />}
          onClick={() => logout()}
          style={{ margin: "1rem 1rem" }}
        >
          Logout
        </Button>
      </div>
      <Row justify="space-between" className={styles.container}>
        {card.map((data, index) => (
          <Col span={8} key={index}>
            <Card
              className={styles.card}
              cover={<img alt={data.first_name} src={data.avatar} />}
              extra={
                <h3
                  onClick={() => showModal(data)}
                  style={{ color: "purple", cursor: "pointer" }}
                >
                  More Details...
                </h3>
              }
            >
              <Meta
                title={`${data.first_name} ${data.last_name}`}
                description={data.email}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <SingleCard
        isModalOpen={isModalOpen}
        handleOk={() => handleOk}
        cardData={selectedCard}
      />
    </div>
  );
};

export default Cards;
