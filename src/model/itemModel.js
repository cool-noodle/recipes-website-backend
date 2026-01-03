const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    title: String
})

const commentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const moreSchema = new Schema({
    prep_time: { type: String, required: true },
    cook_time: { type: String, required: true },
    servings: { type: String, required: true },
    difficulty: { type: String, required: true },
    source: String
})

const ItemSchema = new Schema({
    menuId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    thumbnail_image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: [String],
    ingredients: {
        type: [ingredientSchema], // type is array of objects
        required: true
    },
    instructions: [String],
    notes: [String],
    comments: [commentSchema],
    more: {
        type: {moreSchema},
        required: true
    }
})

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item