import React from "react";
import { GlobalData } from "./GlobalaData";
import { ProductInfo } from "./Interfaces";
import { MyReducer } from "./MyReducer";
import axios from "axios";
import { FormData } from "../pages/formProducts/InterfaceForm";

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(MyReducer, []);

  //* loadData
  const loadData = React.useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      dispatch({
        type: "LOAD_DATA",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    loadData();
  }, []);

  //* LoadOne
  const loadOne = React.useCallback(async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      dispatch({
        type: "LOAD_ONE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  //* CheckboxChange
  const CheckboxChange = React.useCallback(
    async (id: string) => {
      try {
        const product = state?.products?.find(
          (product: ProductInfo) => product.id === id
        );
        const updatedProduct = { ...product, selected: !product?.selected };
        const response: any = await axios.patch(
          `http://localhost:3000/products/${id}`,
          updatedProduct
        );
        dispatch({
          type: "CHANGE_CHECKBOX",
          payload: response?.data,
        });
        loadData();
      } catch (error) {
        console.error(error);
      }
    },
    // para asegurarse de que siempre estamos utilizando la versión
    // actualizada de 'state'
    [state, dispatch, loadData]
  );

  //* False All Products
  const AllFalses = React.useCallback(
    async (id: string) => {
      try {
        const product = state?.products?.find(
          (product: ProductInfo) => product.id === id
        );
        const updatedProduct = { ...product, selected: false };
        const response: any = await axios.patch(
          `http://localhost:3000/products/${id}`,
          updatedProduct
        );
        dispatch({
          type: "CHANGE_CHECKBOX",
          payload: response?.data,
        });
        loadData();
      } catch (error) {
        console.error(error);
      }
    },
    [state, dispatch, loadData]
  );

//* loadOrders
    const loadOrders = React.useCallback(async () => {
      try {
        const response = await fetch("http://localhost:3000/orders");
        const data = await response.json();
        dispatch({
          type: "LOAD_ORDERS",
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    }, []);

  //* CreateOrder
  const CreateOrder = React.useCallback(async (obj: FormData) => {
    try {
    const response: any = await axios
      .post(`http://localhost:3000/orders`, obj)

      dispatch({
        type: "CREATE_ORDER",
        payload: response?.data,
      })
    } catch (error) {
      console.log(error);
    };
  }, []);

  return (
    <GlobalData.Provider
      value={{
        state,
        dispatch,
        loadData,
        loadOne,
        CheckboxChange,
        AllFalses,
        CreateOrder,
        loadOrders,
      }}
    >
      {children}
    </GlobalData.Provider>
  );
};

