import React from "react";
import { BookDescription } from "./BookDescription";

type BookSearchItemProps = {
  description: BookDescription;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchItem: React.FC<BookSearchItemProps> = ({ description, onBookAdd }) => {
  const { title, authors, thumbnail } = props.description;
  const handleAddBookClick = () => {
    onBookAdd(props.description);
  };

  return (
    <div className="book-search-item">
      <h2 title={title}>{title}</h2>
      <div className="authors" title={authos}>
        {authors}
      </div>
      {thumbnail ? <img src={thumbnail} alt="" /> : null}
      <div className="add-book" onClick={handleAddBookClick}>
        <span>+</span>
      </div>
    </div>
  );
};

export default BookSearchItem;
