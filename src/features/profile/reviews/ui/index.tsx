import React from 'react';
import Review from './Review';

/* 
  TODO: Поменять на RTK Query после написания бека
*/
const ReviewList: React.FC = () => {
  const comments = [
    {
      id: 1,
      author: { name: 'Иван Иванов', avatar: 'https://example.com/avatar1.jpg' },
      content: 'Это отличная статья, спасибо автору! Очень полезная информация.',
      createdAt: '2023-05-15T10:30:00Z',
      likes: 5,
      isAuthor: false
    },
    {
      id: 2,
      author: { name: 'Петр Петров' },
      content: 'Я не совсем согласен с некоторыми пунктами, но в целом интересно.',
      createdAt: '2023-05-14T15:45:00Z',
      likes: 2,
      isAuthor: true
    }
  ];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h3>Комментарии ({comments.length})</h3>
      {comments.map(comment => (
        <Review
          key={comment.id}
          author={comment.author}
          content={comment.content}
          createdAt={comment.createdAt}
          likes={comment.likes}
          isAuthor={comment.isAuthor}
        />
      ))}
    </div>
  );
};

export default ReviewList;