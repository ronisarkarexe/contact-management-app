import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Contact,
  addContact,
  deleteContact,
  editContact,
} from "../../actions/contactActions";
import { RootState } from "../../reducers/contactReducer";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const [editMode, setEditMode] = useState(false);
  const [editedContact, setEditedContact] = useState<Contact | null>(null);

  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  useEffect(() => {
    if (editMode && editedContact) {
      setFirstName(editedContact.firstName);
      setLastName(editedContact.lastName);
      setStatus(editedContact.status);
    }
  }, [editMode, editedContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode && editedContact) {
      const updatedContact: Contact = {
        ...editedContact,
        firstName,
        lastName,
        status,
      };

      dispatch(editContact(updatedContact));

      setEditMode(false);
      setEditedContact(null);
    } else {
      const newContact: Contact = {
        id: Date.now(),
        firstName,
        lastName,
        status,
      };

      dispatch(addContact(newContact));
    }

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
          {editMode ? "Update Contact" : "Add Contact"}
        </button>
      </form>

      {editMode && (
        <button
          className="btn btn-error mt-3"
          onClick={() => {
            setEditMode(false);
            setEditedContact(null);
            setFirstName("");
            setLastName("");
            setStatus("active");
          }}
        >
          Cancel Editing
        </button>
      )}

      <h3 className="text-xl font-medium mt-6">
        {editMode ? "Edit Contact" : "Contact List"}
      </h3>

      <table className="table table-zebra mt-4">
        <thead>
          <tr>
            <th>Index</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>
                {contact.status === "active" ? (
                  <div className="badge badge-success badge-xs">Active</div>
                ) : (
                  <div className="badge badge-error badge-xs">Inactive</div>
                )}
              </td>
              <td>
                <button
                  onClick={() => {
                    setEditMode(true);
                    setEditedContact(contact);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactForm;
