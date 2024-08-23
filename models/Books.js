import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const booksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    free: { type: Boolean, required: true }
});

const books = model('books', booksSchema);
export default books;