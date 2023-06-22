import { Request, Response } from "express";
import { Movie } from "../entities";
import { MovieRead, MovieCreate,MovieUpdate, MovieRepo, Pagination } from "../interfaces";
import { deleteMovieService, readMovieService, registerMovieService, updateMovieService } from "../services";

const registerMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movie: MovieCreate = await registerMovieService(req.body)
    return res.status(201).json(movie)
}

const readMovieController = async (req: Request, res: Response): Promise<Response> => {
    const pagination: Pagination = await readMovieService(res.locals.pagination) 
    return res.status(200).json(pagination)
}
const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
    const payload: MovieUpdate = req.body
    const foundMovie : Movie = res.locals.movie
    const movie: Movie = await updateMovieService(foundMovie, payload)
    return res.status(200).json(movie)
}
const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
    await deleteMovieService(res.locals.movie);
    return res.status(204).json();
  };

export {registerMovieController, readMovieController, deleteMovieController, updateMovieController}