import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const booksSchema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    author: { type: String, required: [true, 'Author is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    free: { type: Boolean, required: [true, 'Free is required'] }
});

const books = model('books', booksSchema);
export default books;