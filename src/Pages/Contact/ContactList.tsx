import { useSelector, useDispatch } from "react-redux";
import { ContactState } from "../../reducers/contactReducer";
import { deleteContact } from "../../actions/contactActions";

const ContactList = () => {
  const contacts = useSelector((state: ContactState) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="overflow-x-auto mt-6 ">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Index</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        {contacts.map((contact, index) => (
          <tbody key={index}>
            <tr>
              <th>{index + 1}</th>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>
                {contact.status === "active" ? (
                  <div className="badge badge-success badge-xs"></div>
                ) : (
                  <div className="badge badge-error badge-xs"></div>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ContactList;
