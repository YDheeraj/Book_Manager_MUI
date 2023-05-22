import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";



const Book = ({ book, onUpdate, onDelete }) => {


    const handleUpdate = () => {
      
        const updatedBook = { ...book };
        const updatedTitle = prompt('Enter the updated title:', updatedBook.title);
        const updatedAuthor = prompt('Enter the updated author:', updatedBook.author);
        const updatedYearPublished = prompt('Enter the updated year published:', updatedBook.yearPublished);

        updatedBook.title = updatedTitle;
        updatedBook.author = updatedAuthor;
        updatedBook.yearPublished = updatedYearPublished;
        onUpdate(updatedBook);
      };


  return (
    <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {book.isbn}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {book.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {book.author}
                    </Typography>
                    <Typography variant="body2">
                      {book.yearPublished}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="solid" startIcon={<EditIcon/>}  onClick={()=>handleUpdate(book)}>Update</Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onDelete(book.isbn)}>Delete</Button>
                  </CardActions>
                </Card>
  )
}

export default Book