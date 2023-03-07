export type AllAction =
  | LoadDataAction
  | Change_CheckBox
  | False_AllProduct
  | Load_One
  | Create_Order
  | Load_Orders;

interface LoadDataAction {
  type: "LOAD_DATA";
  payload: ProductInfo[];
}

interface Change_CheckBox {
  type: "CHANGE_CHECKBOX";
  payload: string;
}

interface False_AllProduct {
  type: "FALSE_ALL_PRODUCT";
  payload: ProductInfo;
}

interface Load_One {
  type: "LOAD_ONE";
  payload: ProductInfo;
}

interface Create_Order {
  type: "CREATE_ORDER";
  payload: FormData;
}

interface Load_Orders {
  type: "LOAD_ORDERS";
  payload: FormData[];
}


//

export interface ProductInfo {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
  price: number;
}

export interface MyState {
  state: {
    products: ProductInfo[];
    product?: ProductInfo;
    orders?: FormData[];
  };
  
  dispatch: React.Dispatch<LoadDataAction>;
  loadData: () => Promise<void>;
  loadOne: (id: string) => Promise<void>;
  CheckboxChange: (id: string) => void;
  AllFalses: (id: string) => Promise<void>;
  CreateOrder: (obj: FormData) => Promise<void>;
  loadOrders: () => Promise<void>;
}

export interface FormData {
  id: string;
  supplier: string;
  state: boolean;
  date: string;
  total: number;
}
