import { ADD_TODO, SAVE_CARD_SET, INTERACT_WITH_CARD} from '../actions';

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
    case INTERACT_WITH_CARD:
      const cardSetName = action.values.name;
      const cardId = action.values.cardId;
      const gotItRight = action.values.gotItRight;
      state.cardSets[cardSetName][cardId-1].gotItRight = gotItRight;
      return state;
    default:
      return state;
  }
}