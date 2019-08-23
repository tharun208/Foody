import express, { Request, Response, Router } from 'express';
import App from '../models/app';

export default function getController(): Router {
  return express.Router({ mergeParams: true }).get('/search-restuarants', getRestuarants);
}

function getRestuarants(req: Request, res: Response) {
  const { query } = req;
  const { search } = query;
  const searchResults = App.search.searchRestaurants(search);
  res.status(200).json({ restuarants: searchResults });
}
