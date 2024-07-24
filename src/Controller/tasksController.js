import Task from "../Model/taskModel.js"

export const addTask = async (req, res) => {
    try {
        const { assignedTo, status, dueDate, priority, comment } = req.body
        // console.log(status, dueDate, priority, comment);
        const newTask = await Task.create({ assignedTo, status, dueDate, priority, comment })
        return res.status(201).json({ message: "Task created successfully...", newTask })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export const RetriveAll = async (req, res) => {
    try {
        const allTasks = await Task.find()
        return res.status(200).json({ message: "All tasks retrieved successfully", allTasks })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export const getTaskById = async (req, res) => {
    const taskId = req.params._id;
    try {
        const task = await Task.findById(taskId)
        if (!task) {
            return res.status(404).json({ message: "Task Not found" });
        }
        return res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export const updateTask = async (req, res) => {
    const taskId = req.params._id;
    const updateData = req.body;
    try {
        const task = await Task.findById(taskId)
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        await task.updateOne(updateData)
        return res.status(200).json({ maessage: "Task updated successfully..." })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deleteTask = async (req, res) => {
    const taskId = req.params._id;
    try {
        const task = await Task.findById(taskId)
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        await task.deleteOne()
        return res.status(200).json({ maessage: "Task deleted successfully..." })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}