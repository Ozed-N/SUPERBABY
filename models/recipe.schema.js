const mongoose = require('mongoose');
const { Schema } = mongoose
const recipeSchema = new Schema({
    title: {
        type: string,
        required: [true, 'Hello title is required'],
        minlength: 5,
        maxlength: 20,
        trim: true
    },
    description: {
        type: string,
        required: [true, 'Hello description is required'],
        minlength: 20,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isValid: {
        type: Boolean,
        default: true
    },
    comment: {
        type: [object],
        required: [true, 'comment is required']
    },
    likes: {
        type: [object],
    }
}, { timestamps: true })