import { ADD_TODO, COMPLETED, DELETE_TODO, SHOW_TODO_FIELD } from "../action";

const initialData = {
  list: [],
  AddTodo: false,
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_TODO_FIELD:
      return {
        ...state,
        AddTodo: !state.AddTodo, // Toggle the AddTodo property
      };

    case ADD_TODO:
      const { id, data } = action.payload;
      const newItem = {
        id: id,
        data: data,
        completed:false
      };
      return {
        ...state,
        list: [...state.list, newItem,],
        AddTodo:!state.AddTodo
      };
    // Add cases for other actions if needed
    case DELETE_TODO:
      const deletedItemId = action.payload.id;
      const updatedList = state.list.filter(item => item.id !== deletedItemId);
      return {
        ...state,
        list: updatedList,
      };
      case COMPLETED:
        const completedItemId = action.payload.id;
        const updatedListWithCompletion = state.list.map((item) =>
          item.id === completedItemId ? { ...item, completed: true } : item
        );
        return {
          ...state,
          list: updatedListWithCompletion,
        };
  


    default:
      return state;
  }
};

export default todoReducer;
