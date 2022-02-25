import { actionTypes } from './actionTypes.js';

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

const getProduct = (product) => {
  return {
    type: actionTypes.GET_PRODUCT,
    payload: product,
  };
};


