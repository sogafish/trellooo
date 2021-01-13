import { ADD_ITEM } from './typeNames';

export const addItem = (title: string) => {

  return {
    type: ADD_ITEM,
    payload: { title },
  };
};
