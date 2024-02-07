import express from 'express';
const router = express.Router();
import postToOpenApi from '../controllers/openapi';
import postToNewsApi from '../controllers/news';

router.post('/open-api', postToOpenApi);
router.post('/news', postToNewsApi)

export default router;
