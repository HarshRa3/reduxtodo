import {
  ADD_TODO,
  COMPLETED,
  DELETE_TODO,
  EDITED_TODO,
} from "../action";
// ... (import statements)
const initialData = {
  list: JSON.parse(localStorage.getItem('todos')) || []
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {

    case ADD_TODO:
      const { id, data } = action.payload;

      // Check if data is not empty
      if (data.trim() !== '') {
        const newItem = {
          id: id,
          data: data,
          check: false,
        };

        // Add the new item to the list
        const updatedList = [...state.list, newItem];

        return {
          ...state,
          list: updatedList,
        };
      } else {
        return state; // Keep the current state if data is empty
      }

    case DELETE_TODO:
      const deletedItemId = action.payload.id;
      const filteredList = state.list.filter(
        (item) => item.id !== deletedItemId
      );
      return {
        ...state,
        list: filteredList,
      };

    case COMPLETED:
      const completedId = action.payload.id;
      const completedList = state.list.map((item) => {
        if (item.id === completedId) {
          return { ...item, check: !item.check };
        }
        return item;
      });
      return {
        ...state,
        list: completedList,
      };

    case EDITED_TODO:
      const { id: editId, data: editData } = action.payload;

      // Check if edited data is not empty
      if (editData.trim() !== '') {
        const editedList = state.list.map((item) => {
          if (item.id === editId) {
            return { ...item, data: editData };
          }
          return item;
        });

        return {
          ...state,
          list: editedList,
        };
      } else {
        return state; // Keep the current state if edited data is empty
      }

    default:
      return state;
  }
};

export default todoReducer;
