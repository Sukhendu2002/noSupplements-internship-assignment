import React from "react";
import { useState } from "react";
import "./card.css";
import {
  HeartTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  HeartFilled,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Popup from "../Popup";
import Form from "./Form";

function Card(prop) {
  const [like, setLike] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [name, setName] = useState(prop.item.name);
  const [email, setEmail] = useState(prop.item.email);
  const [phone, setPhone] = useState(prop.item.phone);
  const [website, setWebsite] = useState(prop.item.website);
  const closePopup = () => {
    setOpenPopup(false);
  };
  const updateCard = (name, email, phone, website) => {
    setName(name);
    setEmail(email);
    setPhone(phone);
    setWebsite(website);
    // chack if any field is empty
    if (name === "" || email === "" || phone === "" || website === "") {
      alert("Please fill all fields");
    } else {
      setOpenPopup(false);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${prop.item.username}.svg?options[mood][]=happy`}
            style={{ width: "150px", height: "150px" }}
            alt="avatar"
          />
        </div>

        <div className="card-info">
          <h3>{name}</h3>
          <p>
            <MailOutlined style={{ paddingRight: "7px" }} />
            {email}
          </p>
          <p>
            <PhoneOutlined style={{ paddingRight: "7px" }} />
            {phone}
          </p>
          <p>
            <GlobalOutlined style={{ paddingRight: "7px" }} />
            {website}
          </p>
        </div>
        <div className="card-action">
          <button>
            {like ? (
              <HeartFilled
                onClick={() => setLike(!like)}
                style={{
                  fontSize: "20px",
                  color: "#eb2f96",
                }}
              />
            ) : (
              <HeartTwoTone
                onClick={() => setLike(!like)}
                twoToneColor="#eb2f96"
                style={{
                  fontSize: "20px",
                }}
              />
            )}
          </button>
          <button onClick={() => setOpenPopup(!openPopup)}>
            <EditTwoTone
              style={{
                fontSize: "20px",
              }}
            />
          </button>
          <button
            onClick={() => {
              prop.deleteCard(prop.item.id);
            }}
          >
            <DeleteTwoTone
              style={{
                fontSize: "20px",
              }}
            />
          </button>
        </div>
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        closePopup={closePopup}
      >
        <Form data={prop.item} updateCard={updateCard} />
      </Popup>
    </div>
  );
}

export default Card;
