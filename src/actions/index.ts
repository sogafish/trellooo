import { ADD_LIST } from './actionTypes';

declare type AddListPayload = {
  text: string,
}

export const addList = (payload: AddListPayload) => ({
  type: ADD_LIST,
  payload,
});
