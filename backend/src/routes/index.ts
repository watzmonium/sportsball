import express from 'express';
const router = express.Router();
import fetchStoriesAndQueryGPT from '../controllers/news';

router.post('/sports-news', fetchStoriesAndQueryGPT)

export default router;
