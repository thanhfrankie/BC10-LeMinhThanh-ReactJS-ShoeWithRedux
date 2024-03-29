import {
  ADD_AMOUNT,
  ADD_SHOE,
  DELETE_SHOE,
  MINUS_AMOUNT,
  VIEW_DETAIL,
} from "./constant";
import { shoeArr } from "../data";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DETAIL: {
      state.detail = action.payload;
      return { ...state };
    }
    case ADD_SHOE: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index == -1) {
        let newShoe = { ...action.payload, amount: 1 };
        cloneCart = [...cloneCart, newShoe];
      } else {
        cloneCart[index].amount++;
      }
      return { ...state, cart: cloneCart };
    }
    case DELETE_SHOE: {
      let idShoe = action.payload;
      let newCart = state.cart.filter((item) => item.id !== idShoe);
      return { ...state, cart: newCart };
    }
    case ADD_AMOUNT: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id === action.payload;
      });
      if (index == -1) {
        return { ...state };
      } else {
        cloneCart[index].amount++;
      }
      // cloneCart[index].amount++;

      return { ...state, cart: cloneCart };
    }
    case MINUS_AMOUNT: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id === action.payload;
      });
      cloneCart[index].amount--;
      if (cloneCart[index].amount === 0) {
        alert(`Sản phẩm ${cloneCart[index].name} sẽ được xóa khỏi giỏ hàng`);
        cloneCart.splice(index, 1);
      }
      return { ...state, cart: cloneCart };
    }

    default:
      return state;
  }
};
