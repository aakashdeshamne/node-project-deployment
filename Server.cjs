const express = require('express')
const app = express();
app.use(express.json());

const Books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },

  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },

  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];

app.get('/books', async(req, res) => {
   try{
         res.json(Books);
   } catch (error) {
         res.status(500).send('Error fetching books');
    }
});

app.get('/books/:title', async (req, res) => {
    const bookTitle = req.params.title;
    const book = Books.find((b) => b.title.toLowerCase() === bookTitle.toLowerCase());
  
    if (book) {
      res.json(book);
    } else {
      res.status(404).send('Book not found');
    }
});

app.post('/books', async (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res.status(400).send('Missing fields');
    } 
    const newBook = { title, author, year };
    Books.push(newBook);
    res.status(201).json(newBook);
});

app.delete('/books/:title', async (req, res) => {
    const bookTitle = req.params.title;
    const bookIndex = Books.findIndex((b) => b.title.toLowerCase() === bookTitle.toLowerCase());
    if (bookIndex === -1) {
      return res.status(404).send('Book not found');
    }
    Books.splice(bookIndex, 1);
    res.status(204).send(); 
});

app.put('/books/:title', async (req, res) => {
    const bookTitle = req.params.title;
    const { title, author, year } = req.body;
    const bookIndex = Books.findIndex((b) => b.title.toLowerCase() === bookTitle.toLowerCase());
    if (bookIndex === -1) {
        return res.status(404).send('Book not found');
        }
    const book = Books[bookIndex];
    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = year;
    res.json(book);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))