import express from 'express';
const router = express.Router();
import postToOpenApi from '../controllers/openapi';

router.post('/open-api', postToOpenApi);

export default router;
