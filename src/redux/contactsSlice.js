import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNumber: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          name,
          number,
          id: nanoid(),
        };
      },
    },

    delNumber(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNumber, delNumber } = sliceContacts.actions;
export const contactsReducer = sliceContacts.reducer;
