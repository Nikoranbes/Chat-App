import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        timestamp:{
            type:Date,
            default:Date.now,
        },
    },{
        timestamps:true,
    }
)

export default  mongoose.model('Message',messageSchema);