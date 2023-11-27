import {
  ADD_TODO,
  COMPLETED,
  DELETE_TODO,
  EDITED_TODO,
  SHOW_TODO_FIELD,
} from "../action";

const initialData = {
  list: JSON.parse(localStorage.getItem('todos')) || [],
  ADDTODO: false,
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_TODO_FIELD:
      return {
        ...state,
        ADDTODO: !state.ADDTODO,
      };

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
          ADDTODO: false,
        };
      } else {
        return { ...state, ADDTODO: !state.ADDTODO };
      }

    case DELETE_TODO:
      const deletedItemId = action.payload.id;
      const updatedList = state.list.filter(
        (item) => item.id !== deletedItemId
      );
      return {
        ...state,
        list: updatedList,
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
        const EditedList = state.list.map((item) => {
          if (item.id === editId) {
            return { ...item, data: editData };
          }
          return item;
        });

        return {
          ...state,
          list: EditedList,
        };
      } else {
        return state; // Return the current state if edited data is empty
      }

    default:
      return state;
  }
};

export default todoReducer;
