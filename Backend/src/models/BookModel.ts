import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String },
  available: { type: Boolean, required: true },
});

const Book = model("Book", bookSchema);

export { Book };
