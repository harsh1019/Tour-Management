import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourCount, getTourSearch, updateTour } from "../controllers/tourController.js";

const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";
// create new tour
router.post('/',verifyAdmin, createTour);

// update tour
router.put('/:id',verifyAdmin, updateTour);

// delete tour
router.delete('/:id',verifyAdmin, deleteTour);

// get single tour
router.get('/:id', getSingleTour);

// get All tour
router.get('/', getAllTour);

// get tour by Search
router.get('/search/getTourBySearch',getTourSearch);

// get featured tour
router.get('/search/getFeaturedTours',getFeaturedTour);

//  get tour count
router.get('/search/getTourCount',getTourCount);

export default router;