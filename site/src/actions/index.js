export const ADD_TODO = 'ADD_TODO';
export const SAVE_CARD_SET = 'SAVE_CARD_SET';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()),
      title
    }
  };
}

export const saveCardSet = (name, cardSet) => {
  return {
    type: SAVE_CARD_SET,
    values: {
      name,
      cardSet,
      check: null
    }
  }
}