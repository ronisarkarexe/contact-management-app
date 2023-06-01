import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Contact, addContact } from "../../actions/contactActions";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact: Contact = {
      id: Date.now(),
      firstName,
      lastName,
      status,
    };

    dispatch(addContact(newContact));

    setFirstName("");
    setLastName("");
    setStatus("active");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter First Name</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Last Name</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-control w-full max-w-xs">
          <span className="label-text">Select Status</span>
          <div className="flex items-center mt-2">
            <label className="radio">
              <input
                className="radio radio-success"
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="radio-mark"></span>
              Active
            </label>
            <label className="radio ml-10">
              <input
                className="radio radio-error"
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="radio-mark"></span>
              Inactive
            </label>
          </div>
        </div>
        <br />
        <button className="btn btn-active mt-5" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
