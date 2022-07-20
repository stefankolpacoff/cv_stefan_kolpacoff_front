import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IComment from '../interfaces/IComment';
// import IUser from '../interfaces/IUser';
import CommentBox from './CommentBox';

interface Props {
  idArticle: number;
  userId: number;
}

const comments = ({ idArticle, userId }: Props) => {
  const [userTitle, setUserTitle] = useState<string>('');
  const [userComment, setUserComment] = useState<string>('');
  const [isCommentSubmited, setIsCommentSubmited] = useState<boolean>(false);

  // Function to collect comments to display for each article
  const [commentsList, setCommentsList] = useState<IComment[]>([]);

  useEffect(() => {
    const getCommentsList = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/articles/${idArticle}/comments`;
      const { data } = await axios.get(url);

      setCommentsList(data);
    };
    getCommentsList();
  }, [isCommentSubmited]);

  // Function to handle sumbit input comment

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await axios.post<IComment>(
        `${import.meta.env.VITE_DB_URL}api/users/${userId}/comments`,

        {
          title: userTitle,
          text: userComment,
          idArticle: idArticle,
        },
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      setUserTitle('');
      setUserComment('');
      setIsCommentSubmited(!isCommentSubmited);
    } catch (err: any) {
      console.log(err.response);
    }
  };

  return (
    <div className="messages">
      <form className="messages__form" onSubmit={handleSumbit}>
        <label htmlFor="message">Laissez nous un commentaire</label>
        <input
          value={userTitle}
          type="text"
          placeholder="Entrez votre titre"
          required
          onChange={(e) => setUserTitle(e.target.value)}
        />
        <textarea
          value={userComment}
          id="message"
          placeholder="Entrez votre message"
          required
          rows={8}
          onChange={(e) => setUserComment(e.target.value)}
        />
        <button type="submit" className="message__form__button">
          Envoyer votre commentaire
        </button>
      </form>
      {commentsList &&
        commentsList

          .map((comments) => <CommentBox key={comments.id} {...comments} />)
          .reverse()}
    </div>
  );
};

export default comments;
