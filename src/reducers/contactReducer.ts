import {
  Contact,
  ContactAction,
  ADD_CONTACT,
  DELETE_CONTACT,
} from "../actions/contactActions";

export interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactReducer = (
  state = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof contactReducer>;
