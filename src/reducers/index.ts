const initialState = {
  lists: [],
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'add':
      return state;

    default:
      return state;
  }
};

export default reducer;
