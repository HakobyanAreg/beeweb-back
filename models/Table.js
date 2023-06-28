import mongoose from "mongoose";

const TableSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    status:{
        type: String,
        require: true
    }
},
    {
        timestamps: true
    })

export default mongoose.model('Table', TableSchema)
