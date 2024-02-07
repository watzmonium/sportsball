import "dotenv/config";

const PORT = process.env.PORT;
const OPEN_API_KEY = process.env.OPEN_API_KEY;
const OPEN_API_ORG = process.env.OPEN_API_ORG;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_SOURCES = process.env.NEWS_SOURCES;

export default { PORT, OPEN_API_KEY, OPEN_API_ORG, NEWS_API_KEY, NEWS_SOURCES };
