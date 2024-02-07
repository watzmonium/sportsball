import { useState, useEffect } from 'react'
import { fetchNewsFromApi } from './services/backend';
import Story from './components/Story';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchNews();
  }, [])

  const fetchNews = async () => {
    const response = await fetchNewsFromApi()
    const data = response.data.map(story => JSON.parse(story))
    setStories(data)
  }

  return (
    <div className='site-container'>
      <div className='site-header'><h1 className='shadow'>SPORTSBALL</h1></div>
     {stories.map(story => <Story data={story.data} team={story.team} sport={story.sport}></Story>)}
    </div>
  )
}

export default App
