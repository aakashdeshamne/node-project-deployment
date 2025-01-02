const express = require('express')
const app = express();
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
    
app.listen(3000, () => console.log('Example app listening on port 3000!'))