import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import getLocalData from "../data/BookData";
import Book from "./Book";

const BookList = () => {
  const [books, setBooks] = useState(getLocalData);

  const [input, setInput] = useState({
    title: "",
    author: "",
    yearPublished: "",
    isbn: "",
  });

  // taking Details of Books
  let name, value;
  const handleInput = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  // Adding book in books
  const handleSubmit = () => {
    setBooks([...books, input]);
  };

  // Update Book
  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.isbn === updatedBook.isbn ? updatedBook : book
    );
    console.log(updatedBooks)
    setBooks(updatedBooks);
  };

  // Delete book
  const deleteBook = (id) => {
    const newBooks = books.filter((books, idx) => {
      return books.isbn !== id;
    });
    setBooks(newBooks);
  };


  //Delete All books
  const deleteAll = ()=>{
    const isTrue = window.confirm('Are you sure want to delete all books ');
    if(isTrue){
      setBooks([]);
    }
  }


  // set data on local storage
  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(books));
  }, [books]);

  return (
    <Grid container   direction="column">
      <Grid item xs={3}>
        <Box sx={{ backgroundColor: "#f0f0f0", padding: 2 }}>
          <Typography variant="h5" component="div" >
            Add Books
          </Typography>
          <form onSubmit={handleSubmit} className="flex">
            <TextField
              style={{margin:"5px"}}
              size="small"
              type="text"
              name="title"
              placeholder="Title"
              autoComplete="off"
              value={input.title}
              onChange={handleInput}
            />
            <TextField
             style={{margin:"5px"}}
              size="small"
              type="text"
              name="author"
              autoComplete="off"
              placeholder="Author"
              value={input.author}
              onChange={handleInput}
            />
            <TextField
             style={{margin:"5px"}}
              size="small"
              type="number"
              autoComplete="off"
              name="yearPublished"
              placeholder="Year Published"
              value={input.yearPublished}
              onChange={handleInput}
            >
            </TextField>
            <TextField
             style={{margin:"5px"}}
              size="small"
              type="text"
              name="isbn"
              placeholder="ISBN"
              required
              autoComplete="off"
              value={input.isbn}
              onChange={handleInput}
            />
            <div className="flex">
            <Button style={{margin:"5px"}} type="submit" variant="outlined" startIcon={<AddIcon></AddIcon>}>Create</Button>
            <Button    style={{ color: 'red', borderColor: 'red',margin:"5px" }}  variant="outlined" startIcon={<DeleteIcon />} onClick={deleteAll}>Clear All</Button>
            </div> 
          </form>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ flexGrow: 1 }} p={3}>
          <Grid container spacing={3}>
            {books.map((book, id) => (
              <Grid item key={id}>
                <Book
                  key={book.isbn}
                  book={book}
                  onUpdate={updateBook}
                  onDelete={deleteBook}
                ></Book>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookList;
