import books from "./books";

const categories = [
  {
    id: 1,
    title: "Main",
    books : books,
  },
  {
    id: 2,
    title: "Quest",
    books: [...books.slice(4, 8)],
  },
  {
    id: 3,
    title: "Fantacy",
    books: [...books.slice(3, 7)],
  },
  {
    id: 4,
    title: "Japanese",
    books: [...books.slice(2, 6)],
  },
];

export default categories;
