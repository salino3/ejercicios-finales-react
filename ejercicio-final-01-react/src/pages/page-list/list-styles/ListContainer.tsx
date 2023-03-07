import React from 'react';
import "./listStyles.scss";

interface Props {

     children: JSX.Element | JSX.Element[];
};


export const ListContainer: React.FC<Props> = ({children}) => {

  return (
    <div className="list_layout">
      <h2 className='text-danger'>Hello from List page</h2>
      {children}
    </div>
  );
}
