import { ADD_ITEM } from '../actions/typeNames';

const initialState = {
  items: [],
};

export function itemReducer(state = initialState, action: { type: string, payload: { [key: string]: string } }) {
  switch(action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default: {
      return initialState;
    }
  }
}
