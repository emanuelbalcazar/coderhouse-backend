import { Router } from "../../deps.ts";
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
} from "../handlers/user.ts";

export const router = new Router()
  //User routes
  .get("/api/users/:userId", findUser)
  .delete("/api/users/:userId", deleteUser)
  .patch("/api/users", updateUser)
  .post("/api/users", createUser);
