import express, { Request, Response, Router } from 'express';
import App from '../models/app';

export default function getController(): Router {
  return express.Router({ mergeParams: true }).get('/list', getRestuarants);
}

function getRestuarants(req: Request, res: Response) {
  const { query } = req;
  const { search } = query;
  if (search) {
    const searchResults = App.search.searchRestaurants(search.toLowerCase());
    res.status(200).json({ restuarants: searchResults });
  }
}
