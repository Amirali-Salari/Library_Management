import books from '../models/Books.js';

export const getAllBooks = async (req, res) => {
    const allBooks = await books.find({});
    res.send(allBooks)
}