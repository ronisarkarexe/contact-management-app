export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

export interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Contact;
}

export interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  payload: number;
}

export type ContactAction = AddContactAction | DeleteContactAction;

export const addContact = (contact: Contact): ContactAction => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id: number): ContactAction => ({
  type: DELETE_CONTACT,
  payload: id,
});
