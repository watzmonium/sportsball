import NewsAPI from 'newsapi'
import config from '../utils/config';

const newsApi = new NewsAPI(config.NEWS_API_KEY)

const queryNewsApi = async (): Promise<string> => {
  const newsSources = config.NEWS_SOURCES
  const today = getToday()
  const response = await newsApi.v2.topHeadlines({
    sources: newsSources,
    from: today,
    to: today,
    // q: 'football', not sure if this works, but leaving it in 
    // category: 'business',
  })

  return JSON.stringify(response)
}

const getToday = () => {
  const today = new Date()
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}


export default queryNewsApi;

/*
sources: 'bleacher-report', 'espn', 'fox-sports'

top headlines url: https://newsapi.org/v2/top-headlines
docs: https://newsapi.org/docs/endpoints/top-headlines
*/
