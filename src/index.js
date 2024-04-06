import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Dune",
    author: "FRANK HERBERT",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    title: "The Women",
    author: "KRISTIN HANNAH",
    img: "https://m.media-amazon.com/images/I/91mP3553EzL.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target.value);
  }; // we can use this, or we can use the arrow function in the onChange event
  const handleButtonClick = (e) => {
    console.log("Button Clicked");
  }; // we can use this, or we can use the arrow function in the onClick event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Event Example</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </form>
      <button onClick={() => console.log('hello there')}>Click Me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
