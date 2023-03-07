import React from 'react';
import "./formStyles.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const FormContainer: React.FC<Props> = ({children}) => {
  return (
    <div className='formContainer'>
        {children}
    </div>
  )
}
