import {Request, Response, NextFunction} from 'express'
import queryOpenAPI from '../services/openapiquery';

const postToOpenAPI = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const {headline, body} = request.body;
    if (typeof headline !== "string" || typeof body !== "string") {
      response.status(400).json({ error: "malformed query" });
      return;
    }

    const apiResponse = await queryOpenAPI(headline, body);
    response.status(200).json({ apiResponse });
  } catch (error) {
    console.log(error);
    response.status(500).json({'error':'openAPI error'});
  }
};

export default postToOpenAPI;


/*
curl -X POST http://localhost:3000/api/open-api -H 'Content-Type: application/json' -d '{"headline":"the bulls trade Jordan!","body":"In breaking news, Michael Jordan has been traded to the Deez Nuts!"}'
*/