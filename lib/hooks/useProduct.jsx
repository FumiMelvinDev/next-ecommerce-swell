import { useReducer } from "react";

const init = (product) => {
  const originalPrice = product.origPrice;
  const basePrice = product.price;
  const price = product.price;

  return {
    originalPrice,
    basePrice,
    price,
  };
};

const useProduct = ({ product }) => {
  const [state] = useReducer(product, init);

  return { ...state };
};

export default useProduct;
