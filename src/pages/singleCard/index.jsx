import React from "react";
import { Modal } from "antd";
import "./style.css";

const SingleCard = ({ cardData, isModalOpen, handleOk }) => {
  return (
    <div>
      <Modal
        title={`User Details`}
        centered
        open={isModalOpen}
        onOk={handleOk()}
        onCancel={handleOk()}
      >
        <p>
          First Name:- <b>{cardData.first_name}</b>
        </p>
        <p>
          Last Name:- <b>{cardData.last_name}</b>
        </p>
        <p>
          Email:- <u><a style={{ color: "blue", cursor: "pointer" }} target="blank">
              {cardData.email}
            </a>
          </u>
        </p>
      </Modal>
    </div>
  );
};

export default SingleCard;
