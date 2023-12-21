import express from "express";
import { getUsers, getUsersByID, createUser, updateUser, deleteUser } from "../controllers/UserController.js"


const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersByID);
router.post('/usersAdd', createUser);
router.patch('/usersUpdate/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;