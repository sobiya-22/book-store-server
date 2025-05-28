import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    publishedDate: {
        type: Date,
        required: [true, 'Published date is required']
    }
}, {
    timestamps: true
});

export default mongoose.model('Book', bookSchema); 