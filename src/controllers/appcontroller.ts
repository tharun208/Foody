import express, { Request, Response, Router } from 'express';
import App from '../models/app';

export default function getController(): Router {
  return express
    .Router({ mergeParams: true })
    .get('/search', getRestuarants)
    .post('/:id/rating', giveRatings);
}

function getRestuarants(req: Request, res: Response) {
  const { query } = req;
  const { search } = query;
  const searchResults = App.search.searchRestaurants(search);
  res.status(200).json({ restuarants: searchResults });
}

function giveRatings(req: Request, res: Response) {
  const { body, params } = req;
  if (body.rating <= 5) {
    App.rating.giveRatings(params.id, body.rating);
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false, message: 'Please provide proper value' });
  }
}
