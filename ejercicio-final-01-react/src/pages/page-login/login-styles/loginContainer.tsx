import React from 'react';
import './loginStyles.scss'

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const LoginContainer: React.FC<Props> = ({children}) => {

  return (
    <div className='divloginContainer'>
        {children}
    </div>
  )
}
