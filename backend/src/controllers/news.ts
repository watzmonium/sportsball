import {Request, Response, NextFunction} from 'express'
import queryNewsApi from '../services/newsquery'
import queryOpenAPI from '../services/openapiquery';
import config from '../utils/config';

const fetchStoriesAndQueryGPT = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const sportsNewsJSON = await queryNewsApi();
    const news = JSON.parse(sportsNewsJSON);
    if (news.status !== 'ok') {
      throw new Error('error fetching news')
    }

    const completions: Promise<string>[] = []

    for (const article of news.articles) {
      const {title, description, content} = article
      const sportsPrompt = `${config.BASE_PROMPT}\nheadline: ${title + description}\nbody: ${content}`
      const response = queryOpenAPI(sportsPrompt)
      completions.push(response)
    }
    const settledCompletions = await Promise.allSettled(completions)
    let data = await settledCompletions
    // @ts-ignore
    data = data.map(entry => entry.value)
    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
    response.status(500).json({'error':'newsAPI error'});
  }
};

export default fetchStoriesAndQueryGPT;
