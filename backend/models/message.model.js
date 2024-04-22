import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: trusted,
    },
    receiverID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: trusted,
    },
    message:{
        type: String,
        required: true
    }
    // createdAT, updatedAt 
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;