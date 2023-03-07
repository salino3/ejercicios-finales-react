import { AllAction, ProductInfo } from "./Interfaces";

export const MyReducer = (state: any, action: AllAction) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "LOAD_ONE":
      return {
        ...state,
        product: action.payload,
      };
    case "CHANGE_CHECKBOX":
      const updatedProducts = state.products.map((product: ProductInfo) => {
        if (product.id === action.payload) {
          return { ...product, selected: !product.selected };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: updatedProducts,
      };
    case "FALSE_ALL_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "LOAD_ONE":
      return {
        ...state,
        product: action.payload,
      };
    case "CREATE_ORDER":
      return {
        ...state,
        product: action.payload,
      };
    case "LOAD_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};
