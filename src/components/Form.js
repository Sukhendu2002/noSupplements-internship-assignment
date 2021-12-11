import React from "react";
import "./form.css";
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState(props.data.name);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [website, setWebsite] = useState(props.data.website);
  return (
    <div className="form">
      <form>
        <label>
          <span>*</span>Name :
          <input
            type="text"
            name="name"
            required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>*</span>Email :
          <input
            type="email"
            name="email"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>*</span>Phone :
          <input
            type="text"
            name="phone"
            required="true"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          <span>*</span>Website :
          <input
            type="text"
            name="website"
            required="true"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>

        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            props.updateCard(name, email, phone, website);
          }}
        />
      </form>
    </div>
  );
}

export default Form;
