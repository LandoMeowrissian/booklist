import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import "./index.css";
import { books } from "./books";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} number={index} {...book} getBook={getBook}></Book>;
      })}
    </section>
  );
};

// const EventExample = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target.value);
//   }; // we can use this, or we can use the arrow function in the onChange event
// const handleButtonClick = (e) => {
//   console.log("Button Clicked");
// }; // we can use this, or we can use the arrow function in the onClick event
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Form Submitted");
// };
//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <h2>Event Example</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => {
//             console.log(e.target.value);
//           }}
//         />
//       </form>
//       <button onClick={() => console.log('hello there')}>Click Me</button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
