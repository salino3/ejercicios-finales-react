import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    login: string;
    avatarUrl: string;
};

export const Member: React.FC<Props> = (props) => {
 const {id, login, avatarUrl} = props;

  return (
    <>
      <img src={avatarUrl} />
      <span className='mt-4 mx-2 text-success'>{id}</span>
      <Link className='mt-4' to={`/detail/${login}`}>{login}</Link>
    </>
  );
};
