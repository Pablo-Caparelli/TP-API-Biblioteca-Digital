import { Book } from "../models/BookModel";
import { Request, Response } from "express";

const getAllBooks = async (
  request: Request,
  response: Response
): Promise<any> => {
  try {
    const books = await Book.find();
    return response.json({
      success: true,
      data: books,
      message: "Obteniendo todos los libros",
    });
  } catch (error) {
    const err = error as Error;
    return response.json({
      success: false,
      message: err.message,
    });
  }
};

const createBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const body = req.body;
    const { title, author, publishedYear, genre, available } = body;
    if (!title || !author || !publishedYear || !genre || !available)
      return res.status(400).json({ success: false, message: "data invalida" });
    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
      available,
    });
    const savedBook = await newBook.save();
    res.status(201).json({
      success: true,
      data: savedBook,
      message: "libro agregado con éxito",
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export { getAllBooks, createBook };
