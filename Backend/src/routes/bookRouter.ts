import { Router } from "express";
import { Book } from "../models/BookModel";
import {
  //createBook,
  //deleteBook,
  getAllBooks,
  //getBookID,
  //updateBook,
} from "../controllers/BookController";

//Todas las peticiones que llegan al router
//llegan como:
//http://localhost:1235/API/BOOKS

const bookRouter = Router();

bookRouter.get("/", getAllBooks);

// bookRouter.get("/:id", getBookID);

// Método HTTP
// puede ser GET - POST (es para agregar) - PATCH - DELETE

// bookRouter.post("/", createBook);

// DELETE - http://localhost:1235/api/books

// bookRouter.delete("/:id", deleteBook);

// bookRouter.patch("/:id", updateBook);

export { bookRouter };
