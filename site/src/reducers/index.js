import { ADD_TODO, SAVE_CARD_SET } from '../actions';

const initialState = {
  toDoList: [],
  cardSets: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    case SAVE_CARD_SET:
      const name = action.values.name;
      const cardSet = action.values.cardSet;
      state.cardSets[name] = cardSet;
      return state;
    default:
      return state;
  }
}