import {Request, Response, NextFunction} from 'express'
import queryOpenAPI from '../services/openapiquery';
import queryNewsApi from '../services/newsquery';

const postToOpenAPI = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    // const {headline, body} = request.body;
    // if (typeof headline !== "string" || typeof body !== "string") {
    //   response.status(400).json({ error: "malformed query" });
    //   return;
    // }
    const sportsNewsJSON = await queryNewsApi();
    const news = JSON.parse(sportsNewsJSON);
    if (news.status !== 'ok') {
      throw new Error('error fetching news')
    }

    const {title, description, content} = news.articles[2]
    const apiResponse = await queryOpenAPI(title + description, content);
    response.status(200).json({ apiResponse });
  } catch (error) {
    console.log(error);
    response.status(500).json({'error':'openAPI error'});
  }
};

export default postToOpenAPI;


/*
curl -X POST http://localhost:3000/api/open-api -H 'Content-Type: application/json' -d '{"headline":"the bulls trade Jordan!","body":"In breaking news, Michael Jordan has been traded to the Deez Nuts!"}'
curl -X POST http://localhost:3000/api/open-api -H 'Content-Type: application/json' -d '{"headline":"Kliff Kingsbury expected to interview for Bears OC job, sources say","body":"Former Arizona Cardinals coach Kliff Kingsbury is expected to interview for the Chicago Bears offensive coordinator opening, sources told ESPNs Adam Schefter on Thursday. Kingsbury is the ninth known candidate the Bears have requested to interview, joining a list that includes Shane Waldron, Greg Olson, Klint Kubiak, Liam Coen, Greg Roman, Thomas Brown, Marcus Brady and Zac Robinson.The Bears fired former offensive coordinator Luke Getsy and four members of the offensive staff Jan. 10 and began their search for a replacement immediately. Chicago ranked second in rushing but 27th in passing offense in 2023.Kingsbury, who was fired by the Cardinals after four seasons (2019-22), returned to the college ranks in 2023 as a senior offensive analyst"}'

*/