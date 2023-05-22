import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import './App.css'

const App = () => {
  return (
      <>
      <Navbar></Navbar>
     <BookList></BookList>
     </>
  );
};

export default App;