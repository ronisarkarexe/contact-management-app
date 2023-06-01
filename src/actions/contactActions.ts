//contactActions
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

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

export interface EditContactAction {
  type: typeof EDIT_CONTACT;
  payload: Contact;
}

export type ContactAction = AddContactAction | DeleteContactAction | EditContactAction;

export const addContact = (contact: Contact): ContactAction => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (id: number): ContactAction => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const editContact = (contact: Contact): ContactAction => ({
  type: EDIT_CONTACT,
  payload: contact,
});