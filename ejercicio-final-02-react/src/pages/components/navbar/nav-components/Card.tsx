import React, { useContext } from "react";
import { GlobalData } from "../../../../core/GlobalaData";
import { MyState, ProductInfo } from "../../../../core/Interfaces";
import './componentsStyles.scss';


interface Props {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<any>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<Props> = (props) => {
  const { first, setFirst, setToggle } = props;

  const { state } = useContext<MyState>(GlobalData);
  const { products } = state;

  const onSearchCard = (event: any) => {
    setFirst(event);
    setToggle(true);
  };

  return (
    <>
      {!products
        ? "Loading"
        : products
            .filter((item: ProductInfo) => {
              let searchTerm = "";
              let x = first;
              searchTerm = x?.toLowerCase() || "";
              const thetitle: any = item.title.toLowerCase() || "";
              const theid = item.id.toString();

              return (
                searchTerm &&
                (theid.includes(searchTerm) || thetitle.includes(searchTerm)) &&
                (thetitle || theid)
              );
            })
            .slice(0, 10)
            .map((item: ProductInfo) => (
              <div
                onClick={() => onSearchCard(item.id)}
                className="divRows"
                key={item.id}
              >
                <b>
                {item.id} ~ {item.title}
                </b>
              </div>
            ))}
    </>
  );
};

export default Card;
