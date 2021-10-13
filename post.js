import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    patronymic: { type: String, required: true },
    email: { type: String, required: true }
});

export default mongoose.model('Post', Post);