import express from "express";
import { addTask, deleteTask, getTaskById, RetriveAll, updateTask, } from "../Controller/tasksController.js";
const router = express.Router();

router.post('/addTask', addTask);
router.get('/retrive', RetriveAll);
router.get('/retrive/:_id', getTaskById);
router.put('/updateTask/:_id', updateTask);
router.delete('/deleteTask/:_id', deleteTask);
export default router