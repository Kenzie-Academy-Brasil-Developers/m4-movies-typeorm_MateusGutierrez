import { Router } from "express";
import { deleteMovieController, readMovieController, registerMovieController, updateMovieController } from "../controllers";
import { validateId, validateName,validateBody, pagination } from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";


const movieRouter: Router = Router()

movieRouter.post("", validateBody(movieCreateSchema),validateName,registerMovieController)
movieRouter.get("",pagination,readMovieController)
movieRouter.patch("/:id",validateBody(movieUpdateSchema),validateName,validateId, updateMovieController)
movieRouter.delete("/:id",validateId,deleteMovieController)

export {movieRouter}