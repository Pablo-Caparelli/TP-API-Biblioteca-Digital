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

export { getAllBooks };
