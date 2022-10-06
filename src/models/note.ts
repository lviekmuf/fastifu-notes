import { Categories } from './../types/note.type';
import mongoose from "mongoose"
const noteSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: Categories,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

export default mongoose.model("Note", noteSchema)