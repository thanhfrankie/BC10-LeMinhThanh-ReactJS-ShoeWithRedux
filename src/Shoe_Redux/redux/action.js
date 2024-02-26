import { ADD_AMOUNT, ADD_SHOE, DELETE_SHOE, MINUS_AMOUNT, VIEW_DETAIL } from "./constant";
export let viewDetailAction = (shoe) => {
  return {
    type: VIEW_DETAIL,
    payload: shoe,
  };
};

export const addShoeAction = (payload) => ({
  type: ADD_SHOE,
  payload,
});

export const deleteShoeAction = (id) => ({
  type: DELETE_SHOE,
  payload: id,
});
export const addAmountAction = (id) => ({
  type: ADD_AMOUNT,
  payload: id,
});
export const minusAmountAction = (id) => ({
  type: MINUS_AMOUNT,
  payload: id,
});
