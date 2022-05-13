/*
 * @Description  : useReducer
 * @Author       : huyanyan
 * @Date         : 2021-07-09 13:35:21
 */
import { useReducer } from "react";
import { RdeuceProps } from "./listType";

const store = {
  list: [],
  totalPrice: 0,
  checkedAll: false,
};

const reducer = (state: any, action: RdeuceProps) => {
  switch (action.type) {
    case "list":
      return {
        ...state,
        list: action.list,
      };
    case "totalPrice":
      return {
        ...state,
        totalPrice: action.totalPrice,
      };
    case "checkedAll":
      return {
        ...state,
        checkedAll: action.checkedAll,
      };
  }
};

const useMethodReducer = () => {
  const [state, dispatch] = useReducer(reducer, store);
  return [state, dispatch];
};

export default useMethodReducer;
