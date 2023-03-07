import React from "react";
import { FormData } from "./InterfaceForm";
import { GlobalData } from "../../core/GlobalaData";
import { MyState, ProductInfo } from "../../core/Interfaces";
import { FormContainer } from "./form-styles/FormContainer";
import { FormComponent } from "./FormComponent";
import "./form-styles/formStyles.scss";

export const FormProducts: React.FC = () => {

    const { state, CreateOrder, AllFalses } = React.useContext<MyState>(GlobalData);

  let myArrTotal = state?.products?.filter((x: ProductInfo) => x.selected === true);

  
const myTotal = React.useMemo(() => myArrTotal?.map((item: ProductInfo) => item.price),
  [myArrTotal]
);

  const myTotal2 = React.useMemo(() => myTotal?.reduce((acc, price: number) => acc + price, 0),
    [myTotal]
  );
 
  const [dataForm, setDataForm] = React.useState<FormData>({
    id: "",
    supplier: "",
    state: false,
    date: "",
    total: myTotal2,
  });


  const handleChange =
    (field: keyof FormData): React.ChangeEventHandler<HTMLInputElement> =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;
      setDataForm({
        ...dataForm,
        [field]: value,
      });
    };

  //
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    CreateOrder(dataForm);
    
    setDataForm({
      id: "",
      supplier: "",
      state: false,
      date: "",
      total: null,
    });

    state.products.filter((x: ProductInfo) => 
    x.selected === true).map((item: ProductInfo) => AllFalses(item.id));
     alert("Thanks for your purchase");
  };

  return (
    <FormContainer>
      <FormComponent handleSubmit={handleSubmit} handleChange={handleChange}
       dataForm={dataForm} myTotal2={myTotal2} />
    </FormContainer>
  );
};
