import { ADD_LIST } from '../actions/actionTypes';

const initialState = {
  lists: [],
}

const reducers = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_LIST:
      const _lists = state.lists.concat();
      _lists.push(action.payload);

      return { lists: _lists };

    default:
      return state;
  }
};

export default reducers;
