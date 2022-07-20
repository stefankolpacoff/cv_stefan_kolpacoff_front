import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IComment from '../interfaces/IComment';
import IUser from '../interfaces/IUser';

const CommentBox = (comment: IComment) => {
  const [authorInfo, setAuthorInfo] = useState<IUser>();

  useEffect(() => {
    const getAuthorInfo = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/users/${comment.idUser}`;
      const { data } = await axios.get(url);

      setAuthorInfo(data);
    };
    getAuthorInfo();
  }, []);

  return (
    <div className="box" key={comment.id}>
      <div className="box__left">
        <AccountCircleIcon
          className="box__left__avatar"
          sx={{ fontSize: 70, color: '#6a8eae' }}
        />
        <p className="box__left__name">
          {authorInfo?.firstName} {authorInfo?.lastName}
        </p>
        <Rating
          className="chat__left__rating"
          sx={{
            fontSize: '2.3rem',
          }}
          value={3}
          precision={0.5}
        />
        <p className=" box__left__date">{comment.date} </p>
      </div>
      <div className="box__body">
        <h1 className="box__body__title">{comment.title}</h1>
        <p className="box__body__text">{comment.text} </p>
      </div>
    </div>
  );
};

export default CommentBox;
