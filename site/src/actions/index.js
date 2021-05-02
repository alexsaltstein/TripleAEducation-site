export const ADD_TODO = 'ADD_TODO';
export const SAVE_CARD_SET = 'SAVE_CARD_SET';
export const INTERACT_WITH_CARD = 'INTERACT_WITH_CARD';

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
      cardSet
    }
  }
}

export const interactWithCard = (name, cardId, gotItRight) => {
  return {
    type: INTERACT_WITH_CARD,
    values: {
      name,
      cardId,
      gotItRight
    }
  }
}