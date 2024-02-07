import {Request, Response, NextFunction} from 'express'
import queryNewsApi from '../services/newsquery'

const postToNewsApi = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {

    const apiResponse = await queryNewsApi();
    console.log(apiResponse)
    response.status(200).json({ apiResponse });
  } catch (error) {
    console.log(error);
    response.status(500).json({'error':'newsAPI error'});
  }
};

export default postToNewsApi;
