import mongoose from "mongoose";

const tsakSchema = new mongoose.Schema({
    assignedTo: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
    },
    dueDate: {
        type: String,
        require: true
    },
    priority: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true

    }
})

const Tasks = mongoose.model('tasks', tsakSchema)

export default Tasks