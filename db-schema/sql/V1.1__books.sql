create table books
(
  book_id     serial PRIMARY KEY,
  title       text,
  author      text,
  year        numeric(4),
  description text,
  image       text
);
