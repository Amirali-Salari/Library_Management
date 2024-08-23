import books from '../models/Books.js';

export const getAllBooks = async (req, res) => {
    const allBooks = await books.find({});
    res.send(allBooks)
}

export const deleteBook = async (req, res) => {
    try {
        if (req.params.id) {
            const deletedBook = await books.findByIdAndDelete(req.params.id);
            if (!deletedBook) {
                return res.status(404).send({ message: 'Book not found' });
            }
            return res.send({ message: 'Book deleted successfully' });
        } else {
            return res.status(400).send({ message: 'ID parameter is required' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting book', error });
    }
}